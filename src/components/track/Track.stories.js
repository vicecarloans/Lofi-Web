import React from 'react';
import TrackCard from "./TrackCard";
import { TrackResponseSample } from 'constants/track-response'
import centered from '@storybook/addon-centered/react';

export default { title: 'Track', decorators: [centered] };

export const card = () => <TrackCard {...TrackResponseSample} />

