/* RECENT ALBUMS */
export const FETCH_RECENT_ALBUMS = '@ALBUM/FETCH_RECENT_ALBUMS'
export const fetchRecentAlbums = () => ({
    type: FETCH_RECENT_ALBUMS,
})

export const FETCH_RECENT_ALBUMS_SUCCESS = '@ALBUM/FETCH_RECENT_ALBUMS_SUCCESS'

export const fetchRecentAlbumSuccess = (albums, total) => ({
    type: FETCH_RECENT_ALBUMS_SUCCESS,
    payload: {
        albums,
        total
    }
})

export const FETCH_RECENT_ALBUMS_FAILURE = '@ALBUM/FETCH_RECENT_ALBUMS_FAILURE'

export const fetchRecentAlbumFailure = (err) => ({
    type: FETCH_RECENT_ALBUMS_FAILURE,
    payload: {
        err
    }
})

export const FETCH_MORE_RECENT_ALBUM = '@ALBUM/FETCH_MORE_RECENT_ALBUM'

export const fetchMoreRecentAlbum = (offset, limit) => ({
    type: FETCH_MORE_RECENT_ALBUM,
    payload: {
        offset,
        limit
    }
})

/* POPULAR ALBUMS */

export const FETCH_POPULAR_ALBUMS = '@ALBUM/FETCH_POPULAR_ALBUMS'
export const fetchPopularAlbums = () => ({
    type: FETCH_POPULAR_ALBUMS,
})

export const FETCH_POPULAR_ALBUMS_SUCCESS = '@ALBUM/FETCH_POPULAR_ALBUMS_SUCCESS'

export const fetchPopularAlbumSuccess = (albums, total) => ({
    type: FETCH_POPULAR_ALBUMS_SUCCESS,
    payload: {
        albums,
        total
    }
})

export const FETCH_POPULAR_ALBUMS_FAILURE = '@ALBUM/FETCH_POPULAR_ALBUMS_FAILURE'

export const fetchPopularAlbumFailure = (err) => ({
    type: FETCH_POPULAR_ALBUMS_FAILURE,
    payload: {
        err
    }
})

export const FETCH_MORE_POPULAR_ALBUM = '@ALBUM/FETCH_MORE_POPULAR_ALBUM'

export const fetchMorePopularAlbum = (offset, limit) => ({
    type: FETCH_MORE_POPULAR_ALBUM,
    payload: {
        offset,
        limit
    }
})