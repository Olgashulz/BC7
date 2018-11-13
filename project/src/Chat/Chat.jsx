import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UsMassage from '../UsMessage/UsMessage';
import Registration from "../Registration/Registration"
import Login from "../Login/Login"
import './Chat.css';
import {connect} from 'react-redux'
import {showChat} from "../redux/actions/showChatAction";
import {registration} from "../redux/actions/showRegistrtationAction";
import {login} from "../redux/actions/showLoginAction";




class Chat extends Component {
    state = {

        users: [{
            image: "https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg",
            name: "Fedor Ivanov",
            message: "We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component store.",
            link: "#",
            id: 4582,
        },
            {
                image: "https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg",
                name: "Fedor Ivanov",
                message: "We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component store.",
                link: "#",
                id: 4583,
            },
            {
                image: "https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg",
                name: "Fedor Ivanov",
                message: "We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component store.",
                link: "#",
                id: 4584,
            },
            {
                image: "https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg",
                name: "Fedor Ivanov",
                message: "We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component store.",
                link: "#",
                id: 4585,
            },

            {
                image: "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
                name: "Leon Bashvy",
                message: "We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component store.",
                link: "#",
                id: 4586,
            },

            {
                image: "https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg",
                name: "Genadiy Baday",
                message: "We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component store.",
                link: "#",
                id: 4587,
            }]

    };

    render() {
        return (
            <div className={this.props.showChatHendler ? "showChat" : "hideChat"}>
                <div className="usName">
                    <img className="user" src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"/>
                    <span className="UserName">Hello Olga..</span>
                    <i className="fas fa-times" onClick={this.props.showChat}></i>
                    {this.props.showRegistration && !this.props.showLogin ?
                        <Registration close={this.props.registration} id='registrationShow'/> : null}
                    {this.props.showLogin ? <Login close={this.props.login} id='loginShow'/> : null}
                    <i className="fas fa-home icon-reg" onClick={this.props.registration} id='registrationShow'></i>
                    <i className="fas fa-sign-in-alt icon-log" onClick={this.props.login} id='loginShow'></i>
                </div>
                <h3 className="chatTittle">Last Comments</h3>
                <UsMassage user={this.state.users}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showChatHendler: state.showChatHendler,
        showRegistration: state.showRegistration,
        showLogin: state.showLogin,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        showChat: function () {
            dispatch(showChat())
        },
        registration: function () {
            dispatch(registration())
        },
        login: function () {
            dispatch(login())
        },
    }
}
Chat.propTypes = {
    showChatHendler: PropTypes.bool,
    showRegistration: PropTypes.bool,
    showLogin: PropTypes.bool,
    users: PropTypes.array,
    image: PropTypes.string,
    name: PropTypes.string,
    message:PropTypes.string,
    id: PropTypes.number,
};


export default connect(mapStateToProps, mapDispatchToProps)(Chat);
