import React from 'react'
import { isFetchingRecentTrackSelector } from 'flux/tracks';
import { useRecentTrack } from 'utils/useTrack';
import { useSelector } from 'react-redux';
import { List } from 'antd';
import { TrackCard } from 'components/track';
import { imageSelector } from 'flux/images';
import { uploadSelector } from 'flux/uploads';
import { usePlaylistActions } from 'utils/usePlaylist';

export default function RecentTrackPage() {
    const [tracks, current_page, total, changePage] = useRecentTrack(6);
    const {addToPlaylist} = usePlaylistActions()
    const isFetching = useSelector(isFetchingRecentTrackSelector);
    const images = useSelector(imageSelector);
    const uploads = useSelector(uploadSelector);

    return (
        <>
            <List
                loading={isFetching}
                grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }}
                renderItem={(id) => {
                    const image = images[tracks[id].image]
                    const upload = uploads[tracks[id].upload]
                    return (
                        <List.Item style={{marginTop: 15}}>
                            <TrackCard {...tracks[id]} image={image} upload={upload} onTrackClick={() => addToPlaylist([id])} />
                        </List.Item>
                    );
                }}
                dataSource={Object.keys(tracks)}
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
    )
}
