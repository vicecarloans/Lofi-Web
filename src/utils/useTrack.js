import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchRecentTracks,
    recentTrackSelector,
    recentTrackPaginationSelector,
    fetchMoreRecentTrack,
    popularTrackSelector,
    fetchPopularTracks,
    popularTrackPaginationSelector,
    fetchMorePopularTrack
} from "flux/tracks";

export const useRecentTrack = (max = 6) => {
    const dispatch = useDispatch();

    const data = useSelector(recentTrackSelector);
    const { offset, limit, total } = useSelector(recentTrackPaginationSelector);

    function _getTracks() {
        dispatch(fetchRecentTracks());
    }

    function changePage(page) {
        dispatch(fetchMoreRecentTrack(page - 1, max));
    }
    useEffect(() => {
        _getTracks();
    }, [offset, limit]);

    return [data, offset + 1, total, changePage];
};

export const usePopularTrack = (max = 6) => {
    const dispatch = useDispatch();

    const data = useSelector(popularTrackSelector);
    const { offset, limit, total } = useSelector(popularTrackPaginationSelector);

    function _getTracks() {
        dispatch(fetchPopularTracks());
    }

    function changePage(page) {
        dispatch(fetchMorePopularTrack(page - 1, max));
    }
    useEffect(() => {
        _getTracks();
    }, [offset, limit]);

    return [data, offset + 1, total, changePage];
};
