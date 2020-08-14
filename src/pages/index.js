import React from "react";
import { List } from "antd";
import { TrackCard } from "components/track";
import { usePopularTrack } from "utils/useTrack";

import { useSelector } from "react-redux";
import { isFetchingPopularTrackSelector } from "flux/tracks";
import { imageSelector } from "flux/images";
import { uploadSelector } from "flux/uploads";
import { usePlaylist } from "utils/usePlaylist";


export default function PopularPage() {
    const [tracks, current_page, total, changePage] = usePopularTrack(6);
    const [_, addToPlaylist] = usePlaylist();
    const isFetching = useSelector(isFetchingPopularTrackSelector);
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
                        <List.Item style={{marginTop: 15}}>
                            <TrackCard {...tracks[id]} image={image} upload={upload} onTrackClick={(trackId) => addToPlaylist([trackId])}/>
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
                    total
                }}
            />
        </>
    );
}
