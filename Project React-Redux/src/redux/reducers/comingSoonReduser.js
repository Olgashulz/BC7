export default function comingSoon (state=[], action) {
    switch (action.type) {
        case "SHOW_COMING_SOON":
            return[...action.data];
        default:
            return state;
    }

}