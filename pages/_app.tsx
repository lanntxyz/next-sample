import StoreProvider from "@/lib/store/StoreProvider";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </StoreProvider>
  );
}
