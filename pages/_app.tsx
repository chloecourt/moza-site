import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import Script from "next/script";
import { Inter } from "@next/font/google";
const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { ...pageProps },
}: AppProps<{}>) {
  return (
    <>
      <Script src="https://cmp.osano.com/AzZmMTTZuo9MN31F/78f70d56-d5e3-4f91-9f19-df6125784eb1/osano.js" />
      <RWBProvider>
        <div className={cx(sfPro.variable, inter.variable, "")}>
          <Component {...pageProps} />
        </div>
      </RWBProvider>
      <Analytics />
    </>
  );
}
