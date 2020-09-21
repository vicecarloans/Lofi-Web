import { takeLatest, call, put, select } from 'redux-saga/effects'
import { FETCH_RECENT_TRACKS, fetchRecentTrackFailure, fetchRecentTrackSuccess, fetchPopularTrackSuccess, FETCH_POPULAR_TRACKS, fetchPopularTrackFailure } from './actions'
import { fetchRecentTrackService, fetchPopularTrackService } from 'services/track';
import { normalize } from 'normalizr';
import { trackCollectionSchema } from 'flux/schema';
import { addImages } from '../images';
import { addUploads } from '../uploads';
import { recentTrackPaginationSelector, popularTrackPaginationSelector } from './selectors';

function* getRecentTrackSaga(){
    try{
        const {offset, limit} = yield select(recentTrackPaginationSelector)
        const payload = yield call(fetchRecentTrackService, offset, limit)
        
        const {entities} = normalize(payload.items, trackCollectionSchema)
        // Populate Normalized Result of Tracks
        yield put(fetchRecentTrackSuccess(entities.track, payload.count))
        // Populate Normalized Result of Images
        yield put(addImages(entities.image))
        // Populate Normalized Result of Uploads
        yield put(addUploads(entities.upload))
    }catch(err){
        yield put(fetchRecentTrackFailure(err))
    }
}

function* getPopularTrackSaga(){
    try{
        const {offset, limit} = yield select(popularTrackPaginationSelector)
        const payload = yield call(fetchPopularTrackService, offset, limit)
        
        const {entities} = normalize(payload.items, trackCollectionSchema)
        // Populate Normalized Result of Tracks
        yield put(fetchPopularTrackSuccess(entities.track, payload.count))
        // Populate Normalized Result of Images
        yield put(addImages(entities.image))
        // Populate Normalized Result of Uploads
        yield put(addUploads(entities.upload))
    }catch(err){
        yield put(fetchPopularTrackFailure(err))
    }
}

export default function* trackSagaWatcher() {
    yield takeLatest(FETCH_RECENT_TRACKS, getRecentTrackSaga);
    yield takeLatest(FETCH_POPULAR_TRACKS, getPopularTrackSaga);
}