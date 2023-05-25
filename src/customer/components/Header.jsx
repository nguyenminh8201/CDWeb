import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <Link className="navbar-brand" to="/">
                            <span>
                                Timups
                            </span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">

                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/product">Watches</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="user_option-box">
                                <div id="search">
                                    <input type="email" placeholder="Tìm kiếm..."/>
                                    <a href="">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <Link to="/login">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </Link>
                                <Link to="/cart">
                                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;