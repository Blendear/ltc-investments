/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { colors } from "@/styles/emotion-css/colors";
import type { AppProps } from "next/app";
import store from "../store/redux/store-redux";
import { Provider } from "react-redux";
import Layout from "../layouts/layout/layout";
import Head from "next/head";

const globalCss = {
  container: css({
    body: {
      margin: "10px 15px",
      background: colors.backgroundGradient,
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
