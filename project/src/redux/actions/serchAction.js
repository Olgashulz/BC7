import axios from "axios";


export const getResultSearch = (data) =>({
    type:"SERCH_RESULT",
    data,
})

function fetchResultSearch(value) {

    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8a933616dedc140a2710dab44d7240df&language=ru-RUS&query=${value}&page=1&include_adult=false`)

}

export const resultSearchAsync = (value)=> dispatch =>{
    fetchResultSearch(value)
        .then(result => dispatch(getResultSearch(result.data.results)))
        .catch( error => console.log(error))
}