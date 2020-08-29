import { takeLatest, put, select, call } from "redux-saga/effects";
import { FETCH_RECENT_ALBUMS, fetchRecentAlbumFailure, FETCH_POPULAR_ALBUMS, fetchRecentAlbumSuccess, fetchPopularAlbumFailure, fetchPopularAlbumSuccess } from "./actions";
import { recentAlbumPaginationSelector, popularAlbumPaginationSelector } from "./selectors";
import { fetchRecentAlbumService, fetchPopularAlbumService } from 'services/album'
import { normalize } from "normalizr";
import { albumCollectionSchema } from "flux/schema";
import { addTracks } from "flux/tracks";
import { addImages } from "flux/images";

function* getRecentAlbumSaga(){
    try{
        const {offset, limit} = yield select(recentAlbumPaginationSelector)
        const payload = yield call(fetchRecentAlbumService, offset, limit)
        const {entities} = normalize(payload.items, albumCollectionSchema)
        // Populate Normalized Result of Albums
        yield put(fetchRecentAlbumSuccess(entities.album, payload.count))
        // Populate Normalized Result of Tracks
        yield put(addTracks(entities.track))
        // Populate Normalized Result of Image
        yield put(addImages(entities.image))
    }catch(err){
        console.log(err)
        yield put(fetchRecentAlbumFailure(err))
    }
}

function* getPopularAlbumSaga(){
    try{
        const {offset, limit} = yield select(popularAlbumPaginationSelector)
        const payload = yield call(fetchPopularAlbumService, offset, limit)
        const {entities} = normalize(payload.items, albumCollectionSchema)
        // Populate Normalized Result of Albums
        yield put(fetchPopularAlbumSuccess(entities.album, payload.count))
        // Populate Normalized Result of Tracks
        yield put(addTracks(entities.track))
        // Populate Normalized Result of Image
        yield put(addImages(entities.image))
    }catch(err){
        console.log(err)    
        yield put(fetchPopularAlbumFailure(err))
    }
}

export default function* albumSagaWatcher() {
    yield takeLatest(FETCH_RECENT_ALBUMS, getRecentAlbumSaga)
    yield takeLatest(FETCH_POPULAR_ALBUMS, getPopularAlbumSaga)
}