import { AppProps } from "next/app";
import "../styles/global.css";
import { Inter } from 'next/font/google';

const inter: any = Inter({
    subsets: ["latin", "cyrillic"],
  });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}