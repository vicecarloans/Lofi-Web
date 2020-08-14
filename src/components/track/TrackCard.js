import React from "react";
import {
    TrackResponsePropTypes,
    TrackResponseDefaultProps,
} from "constants/track-response";
import { Space } from "antd";
import { DiscSVG } from "../svg";
import {
    TrackCover,
    CardFront,
    DiscDiv,
    CardHead,
    Title,
    Author,
    Rating,
    Upvote,
    Downvote,
    VoteNum,
} from "./Track.styles";
import {
    StarOutlined,
    FolderAddOutlined,
    LikeOutlined,
    DislikeOutlined,
} from "@ant-design/icons";

export default function TrackCard(props) {
    return (
        <TrackCover>
            <CardHead onClick={() => props.onTrackClick(props.id)}>
                <DiscDiv>
                    <DiscSVG width={120} height={120} fill="#fff" />
                </DiscDiv>
                <CardFront src={props.image?.path} />
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
            <Space style={{width: "100%"}} direction="vertical">
                <div></div>
                <Title>
                    {props.title}{" "}
                    <FolderAddOutlined
                        style={{
                            color: "#FAAD14",
                            cursor: "pointer",
                            paddingLeft: 5,
                            fontSize: 20,
                        }}
                    />{" "}
                </Title>
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
        </TrackCover>
    );
}

TrackCard.propTypes = TrackResponsePropTypes;

TrackCard.defaultProps = TrackResponseDefaultProps;
