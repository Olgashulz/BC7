import React from 'react';
import Modal from "../Modal/Modal";
import "./Registration.css";
import PropTypes from "prop-types";

const Registration = ({close, id}) =>{
    return(
    <Modal close ={close} id={id}>
        <form className="registranionForm">
            <input className="registranionButton" type="e-mail" placeholder="e-mail"/>
            <input className="registranionButton"type="password" placeholder="password"/>
            <input className="registranionButton"type="password" placeholder="repeat password"/>
            <input className="registranionButton" type="submit" value='Registration'/>

        </form>
    </Modal>
    )
};

Registration.propTypes = {
    close: PropTypes.func,
    id: PropTypes.number,
};


export default Registration;