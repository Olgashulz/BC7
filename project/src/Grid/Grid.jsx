import React from 'react';
import PropTypes from 'prop-types';
import CardFilm from '../CardFilm/CardFilm';
import './Grid.css';


const Grid = ({prop,keyFilm, addToFavorite,addToWishList}) => {
    return (
        <div>
                   <div className="grid">
                       {prop===null ? <h2>add films</h2> : prop.map(el => <CardFilm imgFilm={el.poster_path} key={el.id} id={el.id} addToFavorite={addToFavorite} addToWishList={addToWishList}/>)}


        </div>
            {/*<ApearFilmCard/>*/}
        </div>
    )
};


Grid.propTypes = {
    prop: PropTypes.array,
    addToFavorite:PropTypes.func,
    addToWishList: PropTypes.func,

  };
export default Grid;