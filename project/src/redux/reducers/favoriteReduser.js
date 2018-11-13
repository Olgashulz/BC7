export default function showFavorite(state=[], action) {
    switch (action.type){
        case "ADD_TO_FAVORITE":
            return action.array;
        case "DELETE_FROM_FAVORITE":
            let arr = JSON.parse(localStorage.getItem('favorite'));
            arr= arr.filter(el => el.id !== +action.id);
            localStorage.setItem("favorite", JSON.stringify(arr));
            return arr;
        case "GET_FAVORIVE":
            let result = JSON.parse(localStorage.getItem('favorite'));
            return result;
        default:
            return state
    }
}