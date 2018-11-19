import React from 'react';
import PropTypes from 'prop-types';
import Massage from '../Message/Message';
import './UsMessage.css'
import Search from "../Search/Search";




const UsMessage = ({user}) => {
    return (

        <div className="containerChat">
            {user.map(el => <Massage image={el.image} name={el.name} message={el.message} link={el.link} key={el.id}/>)}


        </div>
    )
};
UsMessage.propTypes = {
    user: PropTypes.array,
};
export default UsMessage;