import React from "react";
import {
    TrackResponsePropTypes,
    TrackResponseDefaultProps,
} from "constants/track-response";
import { Space, notification } from "antd";
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
    LikeOutlined,
    DislikeOutlined,
} from "@ant-design/icons";

const confirmTrackAdded = (name) => {
    notification["success"]({
        message: `Track - ${name} - is added`,
        placement: "bottomRight",
        duration: 1.5
    })
}

export default function TrackCard(props) {
    return (
        <TrackCover>
            <CardHead onClick={() => {
                props.onTrackClick()
                confirmTrackAdded(props.title)
            }}>
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
                    {props.title}
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
