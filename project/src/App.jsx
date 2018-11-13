import React, {Component} from 'react';
import Menu from "./Menu/Menu";
import Main from "./Main/Main";
import Chat from "./Chat/Chat";
import './App.css';
import PropTypes from "prop-types";


class App extends Component {
    render() {
        return (

            <div className="container">
                <Menu/>
                <Main showMenuHendler={this.showMenuHendler} showChatHendler={this.showChatHendler}
                      addToFavorite={this.addToFavorite} addToWishList={this.addToWishList}
                      deleteFromWishList={this.deleteFromWishList} deleteFromFavoriteList={this.deleteFromFavoriteList}/>
                <Chat/>

            </div>
        );
    }
}
App.propTypes = {
    showMenuHendler: PropTypes.bool,
    showChatHendler: PropTypes.bool,
    addToFavorite: PropTypes.func,
    addToWishList: PropTypes.func,
    deleteFromFavoriteList: PropTypes.func,
    deleteFromWishList: PropTypes.func,

};
export default App;
