import React from "react";
import { Link } from "react-router-dom";
import './index.css';
const Header = () => {
    return(
        <header className="header row">
            <Link to="" className="header-title">
                Mann Ki Baat
            </Link>
            <div className="header-others">
                <Link to="/home" className="header-items">Home</Link>
                <Link to="/post" className="header-items">Post</Link>
                <Link to="/contact" className="header-items">Connect</Link>

            </div>
        </header>
    )
}
export default Header;