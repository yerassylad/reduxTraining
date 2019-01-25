import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: "NO Scrubs", duration: "4:05"},
    {title: "Macarena", duration: "2:30"},
    {title: "All star", duration: "3:15"},
    {title: "I wantit that way", duration: "1:45"}
  ]
};

const selectedSong = (selectedSong = null, action) => {
  if ( action.type === 'SONG_SELECTED' ) {
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSong
})
