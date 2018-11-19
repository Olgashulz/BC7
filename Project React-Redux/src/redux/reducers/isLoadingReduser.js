export default function isLoading (state = true, action) {
    switch (action.type) {
        case "IS_LOADING_END":
            return false;
        case "IS_LOADING_START":
            return true;
        default:
            return state;
    }

}