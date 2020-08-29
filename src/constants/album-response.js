import PropTypes from "prop-types";

export const AlbumResponsePropTypes = {
    tracks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            id: PropTypes.string,
            image: PropTypes.shape({
                path: PropTypes.string,
                owner: PropTypes.string,
                public: PropTypes.bool,
            }),
            path: PropTypes.string,
            public: PropTypes.bool,
            owner: PropTypes.string,
            author: PropTypes.string,
            favourites: PropTypes.number,
            upvotes: PropTypes.number,
            downvotes: PropTypes.number,
        })
    ),
    public: PropTypes.bool.isRequired,
    favourites: PropTypes.number.isRequired,
    upvotes: PropTypes.number.isRequired,
    downvotes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
        path: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        public: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
    }),
    owner: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    onAlbumClick: PropTypes.func.isRequired,
};
export const AlbumResponseDefaultProps = {
    description: "",
};
export const AlbumResponseSample = {
    tracks: [
        {
            public: true,
            favourites: 0,
            upvotes: 1,
            downvotes: 0,
            id: "5ec5b60b80e73592de61c83d",
            title: "Sunset",
            description: "NTR MND",
            image: {
                public: true,
                id: "5ec5b41b80e73592de61c83b",
                path:
                    "https://res.cloudinary.com/stackoverflow/image/upload/v1597348049/lofi-res/images/gtzghtwkzr54hgrojcyl.jpg",
                owner: "00u93cp6emYBcbnoG4x6",
            },
            author: "NTR MND",
            path:
                "https://res.cloudinary.com/stackoverflow/video/upload/v1590015502/lofi-res/media/oxbpjomc5lojrmxonv1k.mp3",
            owner: "00u93cp6emYBcbnoG4x6",
            upload: {
                status: "COMPLETE_UPLOAD",
                id: "5ec5b60b80e73592de61c83c",
                details: "",
                type: "TRACK",
                owner: "00u93cp6emYBcbnoG4x6",
            },
        },
        {
            public: true,
            favourites: 0,
            upvotes: 1,
            downvotes: 0,
            id: "5ec5b60b80e73592de61c83d",
            title: "Sunset",
            description: "NTR MND",
            image: {
                public: true,
                id: "5ec5b41b80e73592de61c83b",
                path:
                    "https://res.cloudinary.com/stackoverflow/image/upload/v1597347799/lofi-res/images/zlmm69smymqknehg5wc1.gif",
                owner: "00u93cp6emYBcbnoG4x6",
            },
            author: "NTR MND",
            path:
                "https://res.cloudinary.com/stackoverflow/video/upload/v1590015502/lofi-res/media/oxbpjomc5lojrmxonv1k.mp3",
            owner: "00u93cp6emYBcbnoG4x6",
            upload: {
                status: "COMPLETE_UPLOAD",
                id: "5ec5b60b80e73592de61c83c",
                details: "",
                type: "TRACK",
                owner: "00u93cp6emYBcbnoG4x6",
            },
        },
    ],
    public: true,
    favourites: 1,
    upvotes: 1,
    downvotes: 0,
    id: "5ec6bb003dcbd117b908036b",
    title: "Empty your Mind",
    description: "NTR MND Collection",
    image: {
        public: true,
        id: "5ec5b41b80e73592de61c83b",
        path:
            "https://res.cloudinary.com/stackoverflow/image/upload/v1590015005/lofi-res/images/cd10pypazwz54ijfujzs.gif",
        owner: "00u93cp6emYBcbnoG4x6",
    },
    author: "NTR MND",
    owner: "00u93cp6emYBcbnoG4x6",
};
