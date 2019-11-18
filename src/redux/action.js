import { PLAY_MUSIC } from "./constants";

export function playMusic(payload) {
    return {
        type: PLAY_MUSIC,
        payload
    }
};