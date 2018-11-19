export default function apearFilmCard (state={}, action) {
    switch (action.type) {
        case "APEAR_FILM_CARD":
            return action.data;
        default:
            return state;
    }

}