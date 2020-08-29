import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchRecentAlbums,
    recentAlbumSelector,
    recentAlbumPaginationSelector,
    fetchMoreRecentAlbum,
    popularAlbumSelector,
    fetchPopularAlbums,
    popularAlbumPaginationSelector,
    fetchMorePopularAlbum
} from "flux/albums";

export const useRecentAlbum = (max = 6) => {
    const dispatch = useDispatch();

    const data = useSelector(recentAlbumSelector);
    const { offset, limit, total } = useSelector(recentAlbumPaginationSelector);

    function _getAlbums() {
        dispatch(fetchRecentAlbums());
    }

    function changePage(page) {
        dispatch(fetchMoreRecentAlbum(page - 1, max));
    }
    useEffect(() => {
        _getAlbums();
    }, [offset, limit]);

    return [data, offset + 1, total, changePage];
};

export const usePopularAlbum = (max = 6) => {
    const dispatch = useDispatch();

    const data = useSelector(popularAlbumSelector);
    const { offset, limit, total } = useSelector(popularAlbumPaginationSelector);

    function _getAlbums() {
        dispatch(fetchPopularAlbums());
    }

    function changePage(page) {
        dispatch(fetchMorePopularAlbum(page - 1, max));
    }
    useEffect(() => {
        _getAlbums();
    }, [offset, limit]);

    return [data, offset + 1, total, changePage];
};
