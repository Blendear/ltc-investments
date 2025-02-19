/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { colors } from "@/styles/emotion-css/colors";
import type { AppProps } from "next/app";
import store from "../store/redux/store-redux";
import { Provider } from "react-redux";
import Layout from "../layouts/layout/layout";
import Head from "next/head";
import { variables } from "@/styles/emotion-css/variables";
import { useRouter } from "next/router";

const globalCss = {
  container: (isHomePage) =>
    css({
      "*, *::before, *::after": {
        margin: "0",
        padding: "0",
        boxSizing: "inherit",

        "@media (prefers-reduced-motion: reduce)": {
          animationDuration: "0.01ms !important",
          animationIterationCount: "1 !important",
          transitionDuration: "0.01ms !important",
          scrollBehavior: "auto", // "!important" doesn't work here
        },
      },

      "html:focus-within": {
        scrollBehavior: "smooth",
      },

      body: {
        margin: "0",
        background: colors.backgroundGradient,
        // fontFamily is available thanks to the "font importer" code inside "_document.tsx"
        fontFamily: "'Montserrat', sans-serif",
        fontStyle: "normal",
        fontSize: variables.fontSize.regular,
      },

      html: {
        lineHeight: "1.5",
        WebkitTextSizeAdjust: "100%",
        boxSizing: "border-box",
        fontSize: "62.5%", // 10px/16px = 62.5% -> 1rem = 10px
      },

      main: {
        display: "grid",
        justifyItems: "center",
        // 150px on top, because navbar takes 150px, yet 180 on orientation landscape
        padding: !isHomePage ? "150px 30px 60px 30px" : "125px 0px 60px 0px",

        "@media(max-width: 370px)": {
          padding: !isHomePage ? "150px 8px 60px 8px" : "125px 0px 60px 0px",
        },

        "@media (orientation:landscape)": {
          padding: !isHomePage ? "180px 30px 60px 30px" : "150px 0px 60px 0px",
        },
      },

      "h1, h2, h3, h4, h5, h6, p": {
        alignSelf: "center",
      },

      h1: {
        fontSize: variables.fontSize.heading,
      },

      h2: {
        fontSize: variables.fontSize.subheading,
      },

      li: {
        listStyle: "none",
      },

      textarea: {
        resize: "none",
        border: "none",
        background: "none",
        outline: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },

      "a, button": {
        all: "unset",
        cursor: "pointer",

        "&:hover": {
          filter: `saturate(1.25)`,
        },
      },

      input: {
        all: "unset",
      },
    }),
};

function MyApp({ Component, pageProps }: AppProps<{}>) {
  const router = useRouter();
  const isHomePage = router.pathname === "/home";

  return (
    //       _._. "Redux"
    <Provider store={store}>
      {/* //       _._. "Layout" - for wrapping "0. Base" with content that should appear on every page */}
      <Layout>
        <Head>
          {/* //       _._. Title & Meta tags - which will be visible in the browser tab & are good for SEO */}
          <title>LTC Investments</title>
          {/* for example : <title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>  */}
          <meta name="description" content="TODO content" />
        </Head>
        {/* //       _._. Base Next.js component, visible to users */}

        <Global styles={globalCss.container(isHomePage)} />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
