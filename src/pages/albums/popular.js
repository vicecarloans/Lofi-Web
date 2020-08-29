import React from 'react'
import { usePopularAlbum } from 'utils/useAlbum';
import { usePlaylistActions } from 'utils/usePlaylist';
import { useSelector } from 'react-redux';
import { List } from 'antd';
import { isFetchingPopularAlbumSelector } from 'flux/albums';
import { imageSelector } from 'flux/images';
import { allTrackSelector } from 'flux/tracks';
import {AlbumCard} from 'components/album';

export default function PopularAlbumPage() {
    const [albums, current_page, total, changePage] = usePopularAlbum(6);
    const { addToPlaylist } = usePlaylistActions();
    const isFetching = useSelector(isFetchingPopularAlbumSelector);
    const images = useSelector(imageSelector);
    const tracks = useSelector(allTrackSelector);
    console.log(tracks)
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
