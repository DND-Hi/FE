import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <SessionProvider>
      <div className='max-w-[480px] m-auto'>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
