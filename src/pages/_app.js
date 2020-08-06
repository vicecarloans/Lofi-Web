import React from "react";
import Head from "next/head";
import "../../public/less/dark.less";
import { assignToken, configureResponse } from "services/base";

import { AppHeader } from "components/structure/AppHeader";

import withReduxSaga from "next-redux-saga";
import { reduxWrapper } from "flux/configureStore";

import { AppSider } from "components/structure/AppSider";
import { AppLayout, ContentLayout } from "components/structure/AppLayout";

import { AppContent } from "components/structure/AppContent";
import { AppFooter } from "components/structure/AppFooter";
import { useAuth } from "utils/useAuth";

configureResponse();
assignToken();

function App({ Component, pageProps }) {
  useAuth();
  return (
    <>
      <Head>
        <title>Lofi Chillhop</title>
      </Head>

      <AppLayout>
        <AppSider />
        <ContentLayout className="site-layout">
          <AppHeader
            className="site-layout-background"
            style={{ padding: 0 }}
          />
          <AppContent>
            <Component {...pageProps} />
          </AppContent>
          <AppFooter />
        </ContentLayout>
      </AppLayout>
    </>
  );
}

App.getInitialProps = async ({ ctx }) => {
  let pageProps = {};
  const { req } = ctx;
  const user = req && req.userContext ? req.userContext.userinfo : {};

  pageProps.user = user;
  return { pageProps };
};

export default reduxWrapper.withRedux(withReduxSaga(App));
