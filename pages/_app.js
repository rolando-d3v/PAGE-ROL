import "../styles/globals.css";
import Head from "next/head";

import ContextThemeProvider from "../context/themeContext";

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>Portafolio</title>
        <link rel="icon" href="/assets/rol.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div>
        <ContextThemeProvider>
          <Component {...pageProps} />
        </ContextThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
