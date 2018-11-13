import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import {connect} from 'react-redux';
import SearchFilmList from '../searchFilmList/SearchFilmList';
import {showMenu} from "../redux/actions/showMenuAction";
import {showChat} from "../redux/actions/showChatAction";
import {changeSearch} from "../redux/actions/saerchValueAction"
import {resultSearchAsync, getResultSearch} from "../redux/actions/serchAction";



const Search = ({showMenu, showChat, changeSearch, searchValue, resultSearchAsync}) => {
    return (

        <div className="mainSearch">
            <label className="label-form">
                <form>
                    <input type="text" className="input-search" placeholder="Search movie..." onChange={(event) => {
                        changeSearch(event);
                        resultSearchAsync(searchValue)
                    }} value={searchValue}/>

                    <i className="fas fa-bars iconShowMenu" onClick={showMenu}></i>
                    <i className="far fa-comments iconShowChat" onClick={showChat}></i>
                    <i className="fas fa-search"></i>
                </form>
                {searchValue.length ? <SearchFilmList/> : null}
            </label>


        </div>
    )
};

Search.propTypes = {
    searchValue: PropTypes.string,
};

function mapStateToProps(state) {
    return {
        searchValue: state.searchValue
    }
}


function mapDispatchToProps(dispatch) {
    return {
        showMenu: function () {
            dispatch(showMenu())
        },
        showChat: function () {
            dispatch(showChat())
        },
        changeSearch: function (event) {
            dispatch(changeSearch(event))
        },
        getResultSearch: function (data) {
            dispatch(getResultSearch(data))
        },
        resultSearchAsync: function (value) {
            dispatch(resultSearchAsync(value))
        }

    }
}
Search.propTypes={
    searchValue: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);