import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Search from "../Search/Search";
import {Switch, Route} from "react-router-dom";
import PlayingNow from "../PlayingNow/PlayingNow";
import ComingSoon from "../ComingSoon/ComingSoon";
import './Main.css';
import WishList from "../WishList/WishList";
import Favorite from "../Favorite/Favorite";
import ApearFilmCard from "../ApearFilmCard/ApearFilmCard";
import { ConnectedRouter } from 'connected-react-router';
import {history} from "../redux/store/store";


const Main = ({addToFavorite, addToWishList, deleteFromWishList, deleteFromFavoriteList}) => {
    return (
        <div className="main">
            <Search/>
            <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" render={props => <PlayingNow addToFavorite={addToFavorite} addToWishList={addToWishList}/>}/>
            <Route path="/comingsoon" render={props => <ComingSoon addToFavorite={addToFavorite} addToWishList={addToWishList}/>}/>
                <Route path="/wishlist" render={props => <WishList addToWishList={deleteFromWishList}/>}/>
                <Route path="/favorite" render={props => <Favorite addToFavorite={deleteFromFavoriteList}/>}/>
                <Route path="/cardFilm/:id" render ={props=> <ApearFilmCard{...props}/>}/>
            </Switch>
            </ConnectedRouter>




        </div>
    )
};

Main.propTypes = {
    showMenuHendler: PropTypes.func,
    showChatHendler: PropTypes.func,
    addToFavorite: PropTypes.func,
    addToWishList: PropTypes.func,
    props: PropTypes.array,

};

export default Main;



