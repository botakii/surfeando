import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import './Header.css';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item logo">
                Surfeando
            </Link>
            <div className="right menu">
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;