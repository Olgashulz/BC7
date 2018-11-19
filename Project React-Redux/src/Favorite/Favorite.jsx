import React, {Component} from "react";
import Grid from "../Grid/Grid";
import {connect} from 'react-redux';
import {deleteFromFavoriteList,getFavoriteList} from "../redux/actions/favoriteActoin";
import PropTypes from "prop-types";



class Favorite extends  Component{
       componentDidMount(){
        this.props.getFavoriteList();

    };
    render() {
        return(
            <div>
                <Grid prop={this.props.arrFavorite} addToFavorite={this.props.deleteFromFavoriteList}/>

            </div>
        )
    }}

function mapStateToProps(state){
    return{
        arrFavorite: state.showFavorite,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        deleteFromFavoriteList : function (event) {
            dispatch(deleteFromFavoriteList(event))
        } ,
        getFavoriteList: function () {
            dispatch(getFavoriteList())
        }
    }
}
Favorite.propTypes = {
    arrFavorite: PropTypes.array,
};

export default connect( mapStateToProps, mapDispatchToProps)(Favorite);
