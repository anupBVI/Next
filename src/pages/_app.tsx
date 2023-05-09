import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { hydrate } from "react-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>

  )
}
