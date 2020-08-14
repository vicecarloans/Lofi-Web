import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import "antd/dist/antd.dark.less";
import "components/github/react-jinke-music-player/assets/index.css";

import { assignToken, configureResponse } from "services/base";

import { AppHeader } from "components/structure/AppHeader";

import withReduxSaga from "next-redux-saga";
import { reduxWrapper } from "flux/configureStore";

import { AppSider } from "components/structure/AppSider";
import { AppLayout, ContentLayout } from "components/structure/AppLayout";

import { AppContent } from "components/structure/AppContent";
import { AppFooter } from "components/structure/AppFooter";
import { useAuth } from "utils/useAuth";
import { usePlaylist } from "utils/usePlaylist";
import musicPlayerProps from "constants/music-player-conf";

const ReactJkMusicPlayer = dynamic(
    import("components/github/react-jinke-music-player/es"),
    { ssr: false }
);

configureResponse();
assignToken();

function App({ Component, pageProps }) {
    useAuth();
    const [tracks, _, onPlaylistDestroy] = usePlaylist();
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
                    {tracks.length > 0 && (
                        <ReactJkMusicPlayer
                            {...musicPlayerProps}
                            audioLists={tracks}
                            onDestroyed={onPlaylistDestroy}
                        />
                    )}
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
