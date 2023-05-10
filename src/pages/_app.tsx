import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
