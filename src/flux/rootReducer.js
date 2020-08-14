import { combineReducers } from "redux";
import userReducer from "./user";
import tracksReducer from './tracks'
import imagesReducer from './images'
import uploadReducer from './uploads'
import playlistReducer from './playlist'

const rootReducer = combineReducers({
  user: userReducer,
  tracks: tracksReducer,
  images: imagesReducer,
  uploads: uploadReducer,
  playlist: playlistReducer
});

export default rootReducer;
