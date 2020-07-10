import React from "react";
import Icon, { FileAddOutlined, UploadOutlined } from "@ant-design/icons";
import { TrackSVG, AlbumSVG } from "components/svg";
import { PRIVATE_ZONE } from "./app";
export default [
  {
    icon: <Icon component={TrackSVG} />,
    name: "Popular Tracks",
    hasMore: false,
    key: "Popular Tracks",
  },
  {
    icon: <Icon component={AlbumSVG} />,
    name: "Popular Albums",
    hasMore: false,
    key: "Popular Albums",
  },
  {
    icon: <FileAddOutlined />,
    name: "Recently Added",
    hasMore: false,
    key: "Recently Added",
  },
  {
    icon: null,
    name: "Private Zone",
    hasMore: true,
    key: PRIVATE_ZONE,
    subMenus: [
      {
        icon: <UploadOutlined />,
        name: "Upload Track",

        key: "Upload Track",
      },
    ],
  },
];
