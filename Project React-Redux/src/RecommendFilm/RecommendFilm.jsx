import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const RecommendFilm =({title, poster,id})=>{
    return(
        <div className="recommend-films">
            <div className="cardrecfilm">
                <NavLink to ={`/cardFilm/${id}`}><img className="recommend-video" alt ="poster-film" src={`https://image.tmdb.org/t/p/w300${poster}`}/></NavLink>
                   <p className="title-rec-film">{title}</p>
                    <a href="#"/>
                </div>
        </div>

    )
};

RecommendFilm.prorTypes ={
    title: PropTypes.string,
    poster: PropTypes.string,
    id:PropTypes.string,

};


export default RecommendFilm;
