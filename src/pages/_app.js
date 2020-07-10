import React, { useEffect } from "react";
import Head from "next/head";
import "../../public/less/dark.less";
import { assignToken, configureResponse } from "services/base";
import { useDispatch } from "react-redux";
import withAuth from "utils/withAuth";

import { AppHeader } from "components/structure/AppHeader";

import withReduxSaga from "next-redux-saga";
import { reduxWrapper } from "flux/configureStore";

import { AppSider } from "components/structure/AppSider";
import { AppLayout, ContentLayout } from "components/structure/AppLayout";

import { AppContent } from "components/structure/AppContent";
import { AppFooter } from "components/structure/AppFooter";
import { propagateUser } from "flux/user";

configureResponse();

function App({ Component, pageProps }) {
  assignToken(pageProps.accessToken);
  const dispatch = useDispatch();
  useEffect(() => {
    if (pageProps.user.name) {
      dispatch(propagateUser(pageProps.user));
    }
  }, [pageProps]);

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

export default reduxWrapper.withRedux(withReduxSaga(withAuth(App)));
