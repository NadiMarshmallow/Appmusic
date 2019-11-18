import { PLAY_MUSIC } from "./constants";
const initialState = {
  music_url: []
};
function rootReducer(state = initialState, action) {
    if (action.type === PLAY_MUSIC) {
        return Object.assign({}, state, {
            music_url: action.payload
        });
    }
    return state;
}
export default rootReducer;