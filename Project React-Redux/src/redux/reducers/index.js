import {combineReducers} from 'redux';
import  showMenuHendler from "./showMenuReduser";
import showChatHendler from "./showChatReduser";
import  showRegistration from "./showRegistrationReduser";
import  showLogin from "./showLoginReduser";
import showPlayNow from "./playingNowReduser";
import isLoading from "./isLoadingReduser";
import comingSoon from "./comingSoonReduser";
import apearFilmCard from "./apearFilmCardReduser"
import isLoadingCardFilm from "./isLoadingCardFilm"
import showFavorite from "./favoriteReduser"
import showWishList from "./wishListReduser"
import searchValue from "./searchValueReduser"
import searchResult from "./searchReduser"


const rootReducer = combineReducers({
    showMenuHendler,
    showChatHendler,
    showRegistration,
    showLogin,
    showPlayNow,
    isLoading,
    comingSoon,
    apearFilmCard,
    isLoadingCardFilm,
    showFavorite,
    showWishList,
    searchValue,
    searchResult

});


export default rootReducer;