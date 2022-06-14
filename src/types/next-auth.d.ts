declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      access_token: string;
      expires: string;
      refresh_token: string;
      user_id: number;
      username: string;
      email: string;
      avatar: string;
    };
  }
}
