import React from 'react';
import './CardHover.css';
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types";



const CardHover = ({id, addToFavorite, addToWishList})=>{
    return(
        <div className='card-hover'>
            <div className="buttons-hover">
            <button className="btn-icon"><i className="far fa-heart hover-icon" title=" Add to Favorite" data-moviid ={id} onClick={addToFavorite}></i></button>
            <button className="btn-icon"><i className="fas fa-suitcase hover-icon" title=" Add to WishList" data-moviid ={id} onClick={addToWishList}></i></button>
            <button className="btn-icon"><i className="far fa-comments hover-icon" title=" Add to Chat"></i></button>
                <button className='btn-icon'>
                    <NavLink to ={`/cardFilm/${id}`}><i className="fas fa-video hover-icon" title=" Go to movie"></i></NavLink></button>
            </div>
        </div>
    )
};
CardHover.propTypes = {
    addToFavorite: PropTypes.func,
    addToWishList: PropTypes.func,
    id: PropTypes.number,

};


export  default CardHover;