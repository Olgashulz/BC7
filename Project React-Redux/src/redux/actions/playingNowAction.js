import axios from "axios";
import {loading} from "../actions/isLoadingAction";


const getFilms = (data) =>({
    type: "SHOW_NOW_PLAYING",
    data,
});


function fetchFilms() {
    return axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8a933616dedc140a2710dab44d7240df&language=ru-RUS&page=1&region=UA")

}

export const filmsAsync = () => dispatch =>{
    fetchFilms()
        .then(result => dispatch(getFilms(result.data.results)))
        .then(data => dispatch(loading()))
        .catch(error => console.log(error))
};
