import { schema } from 'normalizr'

export const imageSchema = new schema.Entity('image', {});

export const uploadSchema = new schema.Entity('upload', {});
export const uploadCollectionSchema = [uploadSchema];

export const trackSchema = new schema.Entity('track', {
    image: imageSchema,
    upload: uploadSchema
});

export const trackCollectionSchema = [trackSchema]

export const albumSchema = new schema.Entity("album", {
    tracks: [trackSchema]
})