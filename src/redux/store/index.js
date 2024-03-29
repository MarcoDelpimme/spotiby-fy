import SelectedSongReducer from "../reducers/SelectedSong";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: SelectedSongReducer,
});

export default store;
