import React from "react";
import { List } from "antd";
import { TrackCard } from "components/track";

export default function PopularPage() {
    const tracks = [
        {
            public: true,
            favourites: 0,
            upvotes: 1,
            downvotes: 0,
            id: "5ec5b60b80e73592de61c83d",
            title: "Sunset",
            description: "NTR MND",
            image: {
                public: true,
                id: "5ec5b41b80e73592de61c83b",
                path:
                    "https://res.cloudinary.com/stackoverflow/image/upload/v1590015005/lofi-res/images/cd10pypazwz54ijfujzs.gif",
                owner: "00u93cp6emYBcbnoG4x6",
            },
            author: "NTR MND",
            path:
                "https://res.cloudinary.com/stackoverflow/video/upload/v1590015502/lofi-res/media/oxbpjomc5lojrmxonv1k.mp3",
            owner: "00u93cp6emYBcbnoG4x6",
            upload: {
                status: "COMPLETE_UPLOAD",
                id: "5ec5b60b80e73592de61c83c",
                details: "",
                type: "TRACK",
                owner: "00u93cp6emYBcbnoG4x6",
            },
        },
    ];
    return (
        <>
            <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                renderItem={(item) => (
                    <List.Item>
                        <TrackCard {...item } />
                    </List.Item>
                )}
                dataSource={tracks}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize:3
                }}
            />
        </>
    );
}
