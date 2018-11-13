import React from 'react';
import PropTypes from 'prop-types';
import CardHover from '../CardHover/CardHover';
import './CardFilm.css';




const CardFilm =({imgFilm, id, addToFavorite, addToWishList})=>{
    return(

        <div className="film">
            <img alt="poster" className='imgFilm' src={imgFilm !== null ? `https://image.tmdb.org/t/p/w300/${imgFilm}` : `https://st.depositphotos.com/1987177/3470/v/950/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg/`}/>
            <CardHover id={id} addToFavorite={addToFavorite} addToWishList={addToWishList}/>
        </div>
    )
};


CardFilm.propTypes = {
    imgFilm: PropTypes.string,
    addToFavorite: PropTypes.func,
    addToWishList: PropTypes.func,
    id: PropTypes.number,
    keyFilm: PropTypes.number,

};



export default CardFilm;