declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      user_id: number;
      username: string;
      email: string;
      avatar: string;
    };
  }
}
