export default function searchResult (state = [],action) {
    switch (action.type) {
        case "SERCH_RESULT":
            return[...action.data];
        default:
            return state;
    }
}