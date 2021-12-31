import { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";
import "@/styles/global.css";

export default function WhispersW3({ Component, pageProps }: AppProps) {
  return (
    <div className="whispers-w3">
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
      <style jsx>{`
        .whispers-w3 {
          background: #1f2228;
        }
      `}</style>
    </div>
  );
}
