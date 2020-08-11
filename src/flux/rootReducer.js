import { combineReducers } from "redux";
import userReducer from "./user";
import tracksReducer from './tracks'
import imagesReducer from './images'
import uploadReducer from './uploads'

const rootReducer = combineReducers({
  user: userReducer,
  tracks: tracksReducer,
  images: imagesReducer,
  uploads: uploadReducer
});

export default rootReducer;
