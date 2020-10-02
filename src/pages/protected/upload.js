import React from "react";
import ensureAuth from "utils/ensureAuth";
import { UploadDiv, UploadSpace, UploadButton, UploadDivider } from 'components/upload'

import Icon from "@ant-design/icons";
import { TrackSVG, AlbumSVG } from "components/svg";

function Upload() {
  return (
    <UploadDiv>
      <UploadSpace size="large" align="center">
        <UploadButton type="primary" block icon={<Icon style={{fontSize: 24}} component={TrackSVG} />}>Create Track</UploadButton>
        <UploadDivider type="vertical" />
        <UploadButton type="primary" block icon={<Icon style={{fontSize: 24}} component={AlbumSVG} />}>Create Album</UploadButton>
      </UploadSpace>
    </UploadDiv>
  );
}

export const getServerSideProps = ensureAuth();

export default Upload;
