import React from 'react';
import "./Modal.css"
import PropTypes from "prop-types";

const Modal = ({close, children, id}) => {
    return (
        <div className="modal">
            <span className="close" onClick={close} id={id}>x</span>
            {children}
        </div>
    )
};

Modal.propTypes = {
    close: PropTypes.func,
    id: PropTypes.number,
    children: PropTypes.element.isRequired,
};

export default Modal;