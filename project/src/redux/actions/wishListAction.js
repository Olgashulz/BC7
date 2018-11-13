
import axios from "axios";

const addToWishList = (array) => ({
    type: "ADD_TO_WISHLIST",
    array
});

export const deleteFromWishList = (event)=>({
    type:"DELETE_FROM_WISHLIST",
    id: event.target.dataset.moviid,
});

export const getWishList = () =>({
    type: "GET_WISHLIST",
});


function fetchAddToWishList (event) {
    let id = event.target.dataset.moviid;
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5dc8f1bd53095bb93dfec84bda8afa57&language=ru-rus`)}

    export const showWishListAsync = (event)=> dispatch =>{
        fetchAddToWishList (event)
            .then(data => {
                let result = JSON.parse(localStorage.getItem("wishList"));
                if (result) {
                    result.map(el => el.id).includes(data.data.id) ? null :
                        result.push(data.data);
                } else {
                    result = [];
                    result.push(data.data)
                }
                localStorage.setItem('wishList', JSON.stringify(result));
                dispatch(addToWishList(result))
            })
            .catch( error => console.log(error))
    }