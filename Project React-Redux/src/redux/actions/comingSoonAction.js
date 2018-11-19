import axios from "axios";
import {loading} from "../actions/isLoadingAction";


const getComingSoonFilms = (data)=>({
    type: "SHOW_COMING_SOON",
    data,

})
function fetchComingSoonFilms() {
    return axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=8a933616dedc140a2710dab44d7240df&language=ru-RUS&page=2")

}
export const comingSoonAsync = ()=> dispatch =>{
    fetchComingSoonFilms()
        .then(result => dispatch(getComingSoonFilms(result.data.results)))
        .then(data => dispatch(loading()))
        .catch( error => console.log(error))
}