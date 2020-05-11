import React from "react";
import Head from "next/head";
import "../../public/less/dark.less";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lofi Chillhop</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
