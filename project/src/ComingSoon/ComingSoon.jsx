import React, {Component} from 'react';
import Grid from '../Grid/Grid';
import "./ComingSoon.css";
import {connect} from 'react-redux'
import {comingSoonAsync} from "../redux/actions/comingSoonAction";
import {loading} from "../redux/actions/isLoadingAction"
import {showFavoriteAsync} from "../redux/actions/favoriteActoin";
import {comingSoonSort} from "../redux/selectors/menuSelector";
import PropTypes from "prop-types";
import CardFilm from "../CardFilm/CardFilm";


class ComingSoon extends Component {
    componentDidMount() {
        {
            this.props.comingSoonAsync()
        }

    }


    render() {
        return (
            <div>
                {this.props.isLoading ? <h1>Loading</h1> :
                    <Grid prop={this.props.comingSoon} addToFavorite={this.props.showFavoriteAsync}
                          addToWishList={this.props.addToWishList}
                    />}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        comingSoon: comingSoonSort(state),
        isLoading: state.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        comingSoonAsync: function () {
            dispatch(comingSoonAsync())
        },
        loading: function () {
            dispatch(loading())
        },
        showFavoriteAsync: function () {
            dispatch(showFavoriteAsync())
        }
    }

}

ComingSoon.propTypes = {
    comingSoon: PropTypes.array,
    isLoading: PropTypes.bool,
};


export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);