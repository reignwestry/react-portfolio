import React, {Component} from 'react';

import { Link } from "react-router-dom";

//# Components


class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>  
            </nav>   
        );
    }
}

export default Nav;