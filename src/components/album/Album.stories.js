import React from 'react';
import Album from "./Album";
import { AlbumResponseSample } from 'constants/album-response'
import centered from '@storybook/addon-centered/react';

export default { title: 'Album', decorators: [centered] };

export const card = () => <Album onAlbumClick={() => {console.log("clicked")}} {...AlbumResponseSample} />

