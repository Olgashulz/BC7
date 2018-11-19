import React from 'react';
import "./SearchFilmList.css"
import {connect} from "react-redux";
import SearchFilmCard from '../searchFilmCard/SearchFilmCard';
import PropTypes from "prop-types";



const searchFilmList =({searchResult})=>{
    return(
        <div className="searchFilmList">
            <ul className="search_list">
                {searchResult.map(el =>
                    <SearchFilmCard id={el.id} img={el.poster_path} title={el.title} overview={el.overview}/>)}
            </ul>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        searchResult: state.searchResult
    }
}
searchFilmList.propTypes = {
    searchResult: PropTypes.array,
};
export default connect(mapStateToProps, null)(searchFilmList);