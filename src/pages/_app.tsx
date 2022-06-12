import { useState } from "react";
import { AppProps } from "next/app";
import store from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";
import RefreshTokenHandler from "@/components/refreshTokenHandler";
import "@/styles/global.css";

const persistor = persistStore(store);
const queryClient = new QueryClient();

export default function Nymph({ Component, pageProps }: AppProps) {
  const [interval, setInterval] = useState(0);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={interval}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
      <RefreshTokenHandler setInterval={setInterval} />
    </SessionProvider>
  );
}
