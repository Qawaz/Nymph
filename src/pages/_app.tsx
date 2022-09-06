import { useState } from "react";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RefreshTokenHandler from "@/components/refreshTokenHandler";
import "@/styles/global.css";

const queryClient = new QueryClient();

export default function Nymph({ Component, pageProps }: AppProps) {
  const [interval, setInterval] = useState(0);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={interval}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <RefreshTokenHandler setInterval={setInterval} />
    </SessionProvider>
  );
}
