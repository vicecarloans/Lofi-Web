import {
    imageSchema,
    uploadSchema,
    uploadCollectionSchema,
    trackSchema,
    trackCollectionSchema,
    albumSchema,
} from "../flux/schema";
import { normalize } from "normalizr";

describe("Test Normalization Schema for Track Endpoints", () => {
    test("Track Collections Schema", () => {
        const tracks = [
            {
                id: "5ec5b60b80e73592de61c83d",
                title: "Sunset",
                image: {
                    id: "5ec5b41b80e73592de61c83b",
                    path:
                        "https://res.cloudinary.com/stackoverflow/image/upload/v1590015005/lofi-res/images/cd10pypazwz54ijfujzs.gif",
                },
                author: "NTR MND",
                path:
                    "https://res.cloudinary.com/stackoverflow/video/upload/v1590015502/lofi-res/media/oxbpjomc5lojrmxonv1k.mp3",
                upload: {
                    id: "5ec5b60b80e73592de61c83c",
                },
            },
            {
                id: "5ec5b60b80e73592de61c83e",
                title: "Good Day",
                image: {
                    id: "5ec5b41b80e73592de61c83b",
                    path:
                        "https://res.cloudinary.com/stackoverflow/image/upload/v1590015005/lofi-res/images/cd10pypazwz54ijfujzs.gif",
                },
                author: "NTR MND",
                path:
                    "https://res.cloudinary.com/stackoverflow/video/upload/v1590015502/lofi-res/media/oxbpjomc5lojrmxonv1k.mp3",
                upload: {
                    id: "5ec5b60b80e73592de61c83c",
                },
            },
        ];
        const expected = {
            entities: {
                image: {
                    "5ec5b41b80e73592de61c83b": {
                        id: "5ec5b41b80e73592de61c83b",
                        path:
                            "https://res.cloudinary.com/stackoverflow/image/upload/v1590015005/lofi-res/images/cd10pypazwz54ijfujzs.gif",
                    },
                },
                upload: {
                    "5ec5b60b80e73592de61c83c": {
                        id: "5ec5b60b80e73592de61c83c",
                    },
                },
                track: {
                    "5ec5b60b80e73592de61c83d": {
                        title: "Sunset",
                        image: "5ec5b41b80e73592de61c83b",
                        author: "NTR MND",
                        path:
                            "https://res.cloudinary.com/stackoverflow/video/upload/v1590015502/lofi-res/media/oxbpjomc5lojrmxonv1k.mp3",
                        upload: "5ec5b60b80e73592de61c83c",
                    },
                    "5ec5b60b80e73592de61c83e": {
                        title: "Good Day",
                        image: "5ec5b41b80e73592de61c83b",
                        author: "NTR MND",
                        path:
                            "https://res.cloudinary.com/stackoverflow/video/upload/v1590015502/lofi-res/media/oxbpjomc5lojrmxonv1k.mp3",
                        upload: "5ec5b60b80e73592de61c83c",
                    },
                },
            },
            result: [ '5ec5b60b80e73592de61c83d', '5ec5b60b80e73592de61c83e' ]
        };
        expect(normalize(tracks, trackCollectionSchema)).toMatchObject(
            expected
        );
    });
});
