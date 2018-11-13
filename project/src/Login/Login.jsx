import React from 'react';
import Modal from "../Modal/Modal";
import "./Login.css";
import PropTypes from "prop-types";

const Login = ({close, id})=>{
    console.log(id);
    return (
        <Modal close={close} id={id}>
            <form className="loginForm">
                <input className="loginButton" type="text" placeholder="Login"/>
                <input className="loginButton" type="password" placeholder="Password"/>
                <input className="loginButton" type="submit" value='Enter'/>

            </form>
        </Modal>
    );
};
Login.propTypes = {
    close: PropTypes.func,
    id: PropTypes.number,
};

export default Login;