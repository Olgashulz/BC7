export default function  showPlayNow (state=[], action) {
    switch (action.type) {
        case "SHOW_NOW_PLAYING":
            return[...action.data];
        default:
            return state;
    }
}