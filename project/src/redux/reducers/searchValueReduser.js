export default function searchValue( state = '', action) {
    switch (action.type){
        case "SEARCH_CHANGE":
            return action.data;
        case "CLEAR_SEARCH":
            return '';
        default:
            return state
    }

}