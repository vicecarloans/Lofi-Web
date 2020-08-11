import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_RECENT_TRACKS, fetchRecentTrackFailure, fetchRecentTrackSuccess } from './actions'
import { fetchRecentTrackService } from 'services/track';
import { normalize } from 'normalizr';
import { trackCollectionSchema } from 'flux/schema';
import { addImages } from '../images';
import { addUploads } from '../uploads';

function* getRecentTrackSaga({payload: {offset, limit}}){
    try{
        const payload = yield call(fetchRecentTrackService, offset, limit)
        const {entities} = normalize(payload, trackCollectionSchema)
        // Populate Normalized Result of Tracks
        yield put(fetchRecentTrackSuccess(entities.track))
        // Populate Normalized Result of Images
        yield put(addImages(entities.image))
        // Populate Normalized Result of Uploads
        yield put(addUploads(entities.upload))
    }catch(err){
        console.log(err)
        yield put(fetchRecentTrackFailure(err))
    }
}

export default function* trackSagaWatcher() {
    yield takeLatest(FETCH_RECENT_TRACKS, getRecentTrackSaga);
}