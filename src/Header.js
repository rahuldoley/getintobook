import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import image1 from "./image/image1.png";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function Header ({handleChange, fetchData}) {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    };

    console.log(basket);

    return (
        <nav className="header">
            <Link to="/">
                <img
                className="header__logo"
                src={image1}
                alt=""
                />  
            </Link>
            <div className="header__search" onSubmit={fetchData}>
                <input onChange={handleChange}
                className="header__searchInput"
                type="text" />
                <button type="submit">{<SearchIcon 
                className="header__searchIcon" />}</button>
          </div>
            <div className="header-nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login}>
                        <span className="header-option1">Hello {user?.email}</span>
                        <span className="header-option2">
                            <p>{user ? 'Sign Out' : 'Sign In' }</p>
                        </span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="basket">
                        <ShoppingBasketIcon />
                        <span className="basket-count">{basket?.length}</span>
                    </div>
                </Link> 
            </div>
        </nav>
    );
}

export default Header;