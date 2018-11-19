import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import {showMenu} from "../redux/actions/showMenuAction";
import {playNowLength,comingSoonLength, favoriteLength} from "../redux/selectors/menuSelector";


const Menu = ({showMenu, showMenuHendler,playNow,favourite,wish_List, playNowLength,comingSoonLength, favoriteLength} )=> {

 return(
     <div className={showMenuHendler ? "show" :  "hide"}>
         <h1 className="menuTitle"><a className="menuTitleLink" href="/">A Movie</a></h1>
         <ul className="listMenu">
             <li className="menuItem">
                 <i className="fas fa-film"></i>
                 <NavLink className="menuLink" to='/'>Now playing</NavLink>
                 <span className= "quantity">{ playNowLength}</span>
             </li>
             <li className="menuItem">
                 <i className="far fa-clock"></i>
                 <NavLink className="menuLink" to="/comingsoon">Coming soon</NavLink>
                 <span className= "quantity">{comingSoonLength}</span>
             </li>
             <li className="menuItem">
                 <i className="far fa-heart"></i>
                 <NavLink className="menuLink" to="/favorite">Favourite</NavLink>
                 <span className= "quantity">{favoriteLength}</span>
             </li>
             <li className="menuItem">
                 <i className="fas fa-suitcase">
                 </i>
                 <NavLink className="menuLink" to="/wishlist">Wish list</NavLink>
                 <span className= "quantity">{wish_List.length}</span>
             </li>
             <li className='closeMenu' onClick={showMenu}><i className="far fa-times-circle"></i></li>
         </ul>
     </div>
 )

};
function mapStateToProps(state) {
    return {
        showMenuHendler: state.showMenuHendler,
        wish_List: state.showWishList,
        playNowLength: playNowLength(state),
        comingSoonLength: comingSoonLength(state),
        favoriteLength: favoriteLength(state),


    }
}

function mapDispatchToProps(dispatch) {
    return {
        showMenu: function () {
            dispatch(showMenu())
        }
    }

}


Menu.propTypes = {
    showMenuHendler: PropTypes.bool,
    playNowLength: PropTypes.number,
    comingSoonLength: PropTypes.number,
    favoriteLength:PropTypes.number,
    wish_List:PropTypes.array,

};


export default connect(mapStateToProps, mapDispatchToProps)(Menu);