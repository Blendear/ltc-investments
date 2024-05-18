/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { colors } from "@/styles/emotion-css/colors";
import type { AppProps } from "next/app";
import store from "../store/redux/store-redux";
import { Provider } from "react-redux";
import Layout from "../layouts/layout/layout";
import Head from "next/head";
import { variables } from "@/styles/emotion-css/variables";

const globalCss = {
  container: css({
    body: {
      margin: "0",
      background: colors.backgroundGradient,
      // fontFamily is available thanks to the "font importer" code inside "_document.tsx"
      fontFamily: "'Montserrat', sans-serif",
      fontStyle: "normal",
      fontSize: variables.fontSize.regular,
    },

    html: {
      boxSizing: "border-box",
      fontSize: "62.5%", // 10px/16px = 62.5% -> 1rem = 10px
    },

    main: {
      padding: "30px 15px",
    },

    h1: {
      fontSize: variables.fontSize.heading,
    },

    h2: {
      fontSize: variables.fontSize.subheading,
    },
  }),
};

function MyApp({ Component, pageProps }: AppProps<{}>) {
  return (
    //       _._. "Redux"
    <Provider store={store}>
      {/* //       _._. "Layout" - for wrapping "0. Base" with content that should appear on every page */}
      <Layout>
        <Head>
          {/* //       _._. Title & Meta tags - which will be visible in the browser tab & are good for SEO */}
          <title>Template app</title>
          {/* for example : <title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>  */}
          <meta name="description" content="TODO content" />
        </Head>
        {/* //       _._. Base Next.js component, visible to users */}

        <Global styles={globalCss.container} />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
