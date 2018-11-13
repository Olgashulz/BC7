export default function showWishList(state =[], action) {
    switch (action.type){
        case "ADD_TO_WISHLIST":
            return action.array;
        case "DELETE_FROM_WISHLIST":
            let arr = JSON.parse(localStorage.getItem('wishList'));
            arr = arr.filter(el => el.id !== +action.id);
            localStorage.setItem("wishList", JSON.stringify(arr));
            return arr;
        case "GET_WISHLIST":
            let result = JSON.parse(localStorage.getItem('wishList'));
            return result;
        default:
            return state
    }

}