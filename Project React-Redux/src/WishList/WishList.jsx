import React, {Component} from "react";
import Grid from "../Grid/Grid";
import {connect} from 'react-redux';
import {getWishList, deleteFromWishList} from "../redux/actions/wishListAction"
import PropTypes from "prop-types";

class WishList extends Component {
    componentDidMount() {
        this.props.getWishList();
    };
    render() {
        return (
            <div>
                <Grid prop={this.props.arrWishList} addToWishList={this.props.deleteFromWishList}/>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        arrWishList: state.showWishList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getWishList: function () {
            dispatch(getWishList())
        },
        deleteFromWishList: function (event) {
            dispatch(deleteFromWishList(event))
        }
    }

}
WishList.propTypes = {
    arrWishList: PropTypes.array
};
export default connect( mapStateToProps, mapDispatchToProps)(WishList);