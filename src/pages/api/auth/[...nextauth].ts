import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import $axios from "@/utilities/axios";
import { AxiosError } from "axios";

type Credentials = {
  username: string;
  password: string;
};

type Token = {
  access_token: string;
  expires: string;
  refresh_token: string;
};

interface UserResponse extends Token {
  user_id: number;
  username: string;
  email: string;
  avatar: string;
}

async function refreshAccessToken(tokenObject: Token) {
  try {
    // Get a new set of tokens with a refreshToken
    const tokenResponse = await $axios.post("auth/refreshToken", {
      token: tokenObject.refresh_token,
    });

    return {
      ...tokenObject,
      access_token: tokenResponse.data.access_token,
      expires: tokenResponse.data.expires,
      refresh_token: tokenResponse.data.refresh_token,
    };
  } catch (error) {
    return {
      ...tokenObject,
      error: "RefreshAccessTokenError",
    };
  }
}

const providers = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials: Credentials): Promise<UserResponse | null> {
      try {
        const { data } = await $axios.post<UserResponse>("/auth/signin", {
          password: credentials.password,
          username: credentials.username,
        });

        if (data.access_token) {
          return data as UserResponse;
        }

        return null;
      } catch (err) {
        const errors = err as Error | AxiosError;
        throw new Error(errors.message);
      }
    },
  }),
];

const callbacks = {
  jwt: async ({ token, user }) => {
    if (user) {
      // This will only be executed at login. Each next invocation will skip this part.
      token.access_token = user.access_token;
      token.expires = user.expires;
      token.refresh_token = user.refresh_token;
    }

    // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
    const shouldRefreshTime = Math.round(
      token.expires - 60 * 60 * 1000 - Date.now(),
    );

    // If the token is still valid, just return it.
    if (shouldRefreshTime > 0) {
      return Promise.resolve(token);
    }

    // If the call arrives after 23 hours have passed, we allow to refresh the token.
    token = refreshAccessToken(token);
    return Promise.resolve(token);
  },
  session: async ({ session, token }) => {
    // Here we pass accessToken to the client to be used in authentication with your API
    session.access_token = token.access_token;
    session.expires = token.expires;
    session.error = token.error;

    return Promise.resolve(session);
  },
};

export const options = {
  providers,
  callbacks,
  pages: {},
  secret: "your_secret",
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
