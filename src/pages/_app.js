import React from "react";
import Head from "next/head";
import "../../public/less/dark.less";
import { assignToken, configureResponse } from "services/base";

import withAuth from "utils/withAuth";
import { AuthContext } from "utils/useAuth";
import { AppHeader } from "components/structure/AppHeader";

import withReduxSaga from "next-redux-saga";
import { reduxWrapper } from "flux/configureStore";

import { AppSider } from "components/structure/AppSider";
import { AppLayout, ContentLayout } from "components/structure/AppLayout";

configureResponse();

function App({ Component, pageProps }) {
  assignToken(pageProps.accessToken);

  return (
    <>
      <Head>
        <title>Lofi Chillhop</title>
      </Head>

      <AuthContext.Provider value={{ user: pageProps.user }}>
        <AppLayout>
          <AppSider />
          <ContentLayout className="site-layout">
            <AppHeader
              className="site-layout-background"
              style={{ padding: 0 }}
              username={pageProps.user?.name}
            />
            <Component {...pageProps} />
          </ContentLayout>
        </AppLayout>
      </AuthContext.Provider>
    </>
  );
}

export default reduxWrapper.withRedux(withReduxSaga(withAuth(App)));
