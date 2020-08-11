import React from "react";
import { List } from "antd";
import { TrackCard } from "components/track";
import { useRecentTrack } from "utils/useTrack";
import { Skeleton } from "antd";
import { useSelector } from "react-redux";
import { isFetchingRecentTrackSelector } from "flux/tracks";
import { imageSelector } from "flux/images";
import { uploadSelector } from "flux/uploads";

export default function PopularPage() {
    const tracks = useRecentTrack();
    const isFetching = useSelector(isFetchingRecentTrackSelector);
    const images = useSelector(imageSelector);
    const uploads = useSelector(uploadSelector);
    return isFetching ? (
        <Skeleton active />
    ) : (
        <>
            <List
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
                        useRecentTrack(page, 25);
                    },
                    pageSize: 1,
                }}
            />
        </>
    );
}
