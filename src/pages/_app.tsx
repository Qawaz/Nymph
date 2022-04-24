import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";
import "@/styles/global.css";
import store from "@/redux/store";

const persistor = persistStore(store);
const queryClient = new QueryClient();

export default function WhispersW3({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <div className="whispers-w3">
            <Component {...pageProps} />
            <style jsx>{`
              .whispers-w3 {
                background: rgb(40, 42, 54);
              }
            `}</style>
          </div>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
