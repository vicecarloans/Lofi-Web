import React from "react";
import Head from "next/head";
import "../../public/less/dark.less";
import { assignToken, configureResponse } from "services/base";
import withAuth from "utils/withAuth";
import { AuthContext } from "utils/useAuth";
import { PageHeader } from "components/layout/Header";
import { PageLayout } from "components/layout";

configureResponse();

function App({ Component, pageProps }) {
  assignToken(pageProps.accessToken);

  return (
    <>
      <Head>
        <title>Lofi Chillhop</title>
      </Head>
      <AuthContext.Provider value={{ user: pageProps.user }}>
        <PageLayout>
          <PageHeader />
          <Component {...pageProps} />
        </PageLayout>
      </AuthContext.Provider>
    </>
  );
}

export default withAuth(App);
