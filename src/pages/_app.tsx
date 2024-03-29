import { useState } from "react";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import RefreshTokenHandler from "@/components/refreshTokenHandler";
import "@/styles/global.css";

export default function Nymph({ Component, pageProps }: AppProps) {
  const [interval, setInterval] = useState(0);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={interval}>
      <Component {...pageProps} />
      <RefreshTokenHandler setInterval={setInterval} />
    </SessionProvider>
  );
}
