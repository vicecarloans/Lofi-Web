import React from "react";
import Icon, { FileAddOutlined, UploadOutlined, AppstoreAddOutlined } from "@ant-design/icons";
import { TrackSVG, AlbumSVG } from "components/svg";
import { PRIVATE_ZONE } from "./app";
export default [
  {
    icon: <Icon component={TrackSVG} />,
    name: "Popular Tracks",
    hasMore: false,
    to: "/",
    key: "Popular Tracks",
  },
  {
    icon: <Icon component={AlbumSVG} />,
    name: "Popular Albums",
    hasMore: false,
    to: "/albums/popular",
    key: "Popular Albums",
  },
  {
    icon: <FileAddOutlined />,
    name: "Recently Added Tracks",
    hasMore: false,
    to: "/tracks",
    key: "Recently Added Tracks",
  },
  {
    icon: <AppstoreAddOutlined />,
    name: "Recently Added Albums",
    hasMore: false,
    to: "/albums",
    key: "Recently Added Albums",
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
