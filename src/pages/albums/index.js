import React from "react";
import { useRecentAlbum } from "utils/useAlbum";
import { usePlaylistActions } from "utils/usePlaylist";
import { useSelector } from "react-redux";
import { isFetchingRecentAlbumSelector } from "flux/albums";
import { allTrackSelector } from "flux/tracks";
import { List } from "antd";
import {AlbumCard} from "components/album";
import { imageSelector } from "flux/images";

export default function RecentAlbumPage() {
    const [albums, current_page, total, changePage] = useRecentAlbum(6);
    const { addToPlaylist } = usePlaylistActions();
    const isFetching = useSelector(isFetchingRecentAlbumSelector);
    const images = useSelector(imageSelector);
    const tracks = useSelector(allTrackSelector);
    
    return (
        <>
            <List
                loading={isFetching}
                grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }}
                renderItem={(id) => {
                    const image = images[albums[id].image]
                    const trackCollection = albums[id].tracks.map(tid => ({...tracks[tid], image: images[tracks[tid]?.image]}))

                    return (
                        <List.Item style={{marginTop: 30}}>
                            <AlbumCard {...albums[id]} image={image} tracks={trackCollection} onAlbumClick={() => addToPlaylist(albums[id].tracks)}/>
                        </List.Item>
                    );
                }}
                dataSource={Object.keys(albums)}
                pagination={{
                    onChange: (page) => {
                        changePage((page - 1) * 6 + 1, page * 6)
                    },
                    pageSize: 6,
                    defaultCurrent: current_page,
                    total
                }}
            />
        </>
    );
}
