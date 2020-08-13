import React from 'react'
import { isFetchingRecentTrackSelector } from 'flux/tracks';
import { useRecentTrack } from 'utils/useTrack';
import { useSelector } from 'react-redux';
import { List } from 'antd';
import { TrackCard } from 'components/track';
import { imageSelector } from 'flux/images';
import { uploadSelector } from 'flux/uploads';

export default function RecentPage() {
    const [tracks, current_page, changePage] = useRecentTrack(6);
    const isFetching = useSelector(isFetchingRecentTrackSelector);
    const images = useSelector(imageSelector);
    const uploads = useSelector(uploadSelector);

    return (
        <>
            <List
                loading={isFetching}
                grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                renderItem={(id) => {
                    const image = images[tracks[id].image]
                    const upload = uploads[tracks[id].upload]
                    return (
                        <List.Item>
                            <TrackCard {...tracks[id]} image={image} upload={upload} />
                        </List.Item>
                    );
                }}
                dataSource={Object.keys(tracks)}
                pagination={{
                    onChange: (page) => {
                        changePage(page, page * 6)
                    },
                    pageSize: 6,
                    defaultCurrent: current_page,
                }}
            />
        </>
    )
}
