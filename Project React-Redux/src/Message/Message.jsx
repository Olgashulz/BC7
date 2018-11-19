import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';


const Message = ({name,message,link,image}) => {
    return (

        <div className="userMessage">

            <img className="imgUser" src={image} alt="img-redundant-alt"/>
            <span className="name">{name}</span>
            <p className="message">{message}</p>
            <a className="link" href="#">Your facebook friend</a>


        </div>
    )
};
Message.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
};
export default Message;








