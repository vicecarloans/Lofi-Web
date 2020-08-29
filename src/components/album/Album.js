import React from "react";
import {
    AlbumResponsePropTypes,
    AlbumResponseDefaultProps,
} from "constants/album-response";
import {
    AlbumCover,
    CardHead,
    Author,
    Title,
    Rating,
    Upvote,
    Downvote,
    CardFront,
    VoteNum,
    CardMiddle,
    CardBack
} from "./Album.styles";
import { Space, notification } from "antd";
import { StarOutlined, LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const confirmAlbumAdded = (name) => {
    notification["success"]({
        message: `Album - ${name} - is added`,
        placement: "bottomRight",
        duration: 1.5
    })
}

export default function AlbumCard(props) {
    return (
        <AlbumCover>
            <CardHead onClick={() => {
                props.onAlbumClick()
                confirmAlbumAdded(props.title)
            }}>
                <CardBack src={props.image ? props.tracks[1]?.image?.path : props.tracks[2]?.image?.path} />
                <CardMiddle src={props.image ? props.tracks[0]?.image?.path : props.tracks[1]?.image?.path} />
                <CardFront src={props.image ? props.image?.path : props.tracks[0]?.image?.path} />
            </CardHead>
            <StarOutlined
                style={{
                    position: "absolute",
                    color: "#FAAD14",
                    left: 190,
                    top: -15,
                    fontSize: 24,
                    cursor: "pointer",
                }}
            />
            <Space style={{ width: "100%" }} direction="vertical">
                <div></div>
                <Title>{props.title}</Title>
                <Author>{props.author}</Author>
                <Rating>
                    <Upvote>
                        <LikeOutlined
                            style={{
                                color: "#FAAD14",
                                fontSize: 20,
                            }}
                        />
                        <VoteNum>{props.upvotes}</VoteNum>
                    </Upvote>
                    <Downvote>
                        <DislikeOutlined
                            style={{
                                color: "#FAAD14",
                                fontSize: 20,
                            }}
                        />
                        <VoteNum>{props.downvotes}</VoteNum>
                    </Downvote>
                </Rating>
            </Space>
        </AlbumCover>
    );
}

AlbumCard.propTypes = AlbumResponsePropTypes;
AlbumCard.defaultProps = AlbumResponseDefaultProps;
