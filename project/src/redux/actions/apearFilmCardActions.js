import axios from "axios";
import {loading} from "../actions/isLoadingAction";

 export const getApearfilmCard = (data) => ({
    type: "APEAR_FILM_CARD",
    data,
});

export const clearSearch =()=>({
    type: "CLEAR_SEARCH",
});


function fetchApearfilmCard(id) {
    return Promise.all([axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=170b9b9397b0574b7d603cba918ea1f4&language=ru_RUS`
    ), axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8ec2e8f7ca273089f162e1aee11d0dcb&language=en-US`),
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=8a933616dedc140a2710dab44d7240df&language=ru-RUS&page=1`)])
}


export const apearFilmCardAsynx  = (id) => dispatch =>{
    fetchApearfilmCard(id)
        .then( data => {
            let [info, video, similar] = data;
            let desctiption = info.data;
            let trailers = video.data.results;
            let recommendations = similar.data.results;
            let fullInfo = {
                ...desctiption,
                trailers: trailers,
                recommendations: recommendations,
            };
            dispatch(getApearfilmCard(fullInfo));
        })
       /* .then(data => dispatch(loading()))*/
        .then(data => dispatch(clearSearch()))
        .catch(error => console.log(error))
};