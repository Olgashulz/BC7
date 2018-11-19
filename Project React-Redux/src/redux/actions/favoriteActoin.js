import axios from "axios";

const addToFavoriteList = (array)=>({
    type: "ADD_TO_FAVORITE",
    array
});

export const deleteFromFavoriteList = (event)=>({
    type: "DELETE_FROM_FAVORITE",
    id: event.target.dataset.moviid,
});

export const getFavoriteList = () =>({
    type: "GET_FAVORIVE",
    });

function fetchAddToFavoriteList(event) {
    let id = event.target.dataset.moviid;
    return  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5dc8f1bd53095bb93dfec84bda8afa57&language=ru-rus`)
}

export const showFavoriteAsync = (event)=> dispatch =>{
    fetchAddToFavoriteList(event)
        .then(data => {
            let result = JSON.parse(localStorage.getItem('favorite'));
            if (result) {
                result.map(el => el.id).includes(data.data.id) ? null :
                    result.push(data.data);
            } else {
                result = [];
                result.push(data.data)
            }
            localStorage.setItem('favorite', JSON.stringify(result));
            dispatch(addToFavoriteList(result))
        })
        .catch( error => console.log(error))
}
