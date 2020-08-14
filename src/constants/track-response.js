import PropTypes from "prop-types";

export const TrackResponsePropTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
        path: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        public: PropTypes.bool.isRequired,
    }),
    upload: PropTypes.shape({
        status: PropTypes.oneOf([
            "PENDING_UPLOAD",
            "COMPLETE_UPLOAD",
            "PENDING_APPROVAL",
            "ACCEPTED",
            "REJECTED",
        ]).isRequired,
        details: PropTypes.string,
        type: PropTypes.oneOf(["IMAGE", "TRACK"]).isRequired,
        owner: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    public: PropTypes.bool.isRequired,
    owner: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    favourites: PropTypes.number.isRequired,
    upvotes: PropTypes.number.isRequired,
    downvotes: PropTypes.number.isRequired,
    onTrackClick: PropTypes.func.isRequired,
    
};

export const TrackResponseDefaultProps = {
    description: "",
};

export const TrackResponseSample = {
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
            "https://res.cloudinary.com/stackoverflow/image/upload/v1590015005/lofi-res/images/cd10pypazwz54ijfujzs.gif",
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
};
