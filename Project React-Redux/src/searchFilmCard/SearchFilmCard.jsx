import React from 'react';
import "./SearchFilmCard.css"
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


const searchFilmCard =({img,title,overview, id })=>{
    return(
        <li className="search_link">
            <div className="search_img">
                <NavLink to ={`/cardFilm/${id}`}><img alt="poster" className='imgFilm' src= {`https://image.tmdb.org/t/p/w300/${img}`}/></NavLink></div>
            <div className="search_info"><h5 className="search_title">{title}</h5>
                <p className="search_text">{overview}</p></div>
        </li>
    )
};
searchFilmCard.propTypes = {
    img: PropTypes.string,
    title:PropTypes.string,
    overview:PropTypes.string,
    id:PropTypes.string,
};
export default searchFilmCard;