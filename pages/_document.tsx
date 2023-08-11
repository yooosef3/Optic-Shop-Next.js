import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="max-w-[1600px] mx-auto" lang="fa" dir="rtl">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
