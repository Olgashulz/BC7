import React, {Component} from 'react';
import Grid from '../Grid/Grid';
import "./PlayingNow.css";
import {filmsAsync} from "../redux/actions/playingNowAction";
import {loading} from "../redux/actions/isLoadingAction"
import {connect} from 'react-redux'
import {showFavoriteAsync} from "../redux/actions/favoriteActoin";
import {showWishListAsync} from "../redux/actions/wishListAction";
import {playNowSort} from "../redux/selectors/menuSelector";
import PropTypes from "prop-types";



class PlayingNow extends Component {
    componentDidMount() {
        {
            this.props.filmsAsync()
        }
    }

    render() {
        console.log(this.props.showPlayNow);
        return (
            <div>
                {this.props.isLoading ? <h1>Loading ...</h1> :
                    <Grid prop={this.props.showPlayNow} addToFavorite={this.props.showFavoriteAsync}
                          addToWishList={this.props.showWishListAsync} WishList={this.props.WishList}/>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showPlayNow: playNowSort(state),
        isLoading: state.isLoading,


    }
}

function mapDispatchToProps(dispatch) {
    return {
        filmsAsync: function () {
            dispatch(filmsAsync())
        },
        loading: function () {
            dispatch(loading())
        },
        showFavoriteAsync: function (event) {
            dispatch(showFavoriteAsync(event))
        },
        showWishListAsync: function (event) {
            dispatch(showWishListAsync(event))
        }
    }

}

PlayingNow.propTypes = {
    showPlayNow: PropTypes.array,
    isLoading: PropTypes.bool,

    };

export default connect(mapStateToProps, mapDispatchToProps)(PlayingNow);