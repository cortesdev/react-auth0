import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        const { isAuthenticated, login, logout} = this.props.auth;
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {isAuthenticated() ? 
                        <li><Link to="/profile">Profile</Link></li> : null }    
                    {isAuthenticated() ? 
                        <li><Link to="/public">Public</Link></li> : null }       
                    {isAuthenticated() ? 
                        <li><Link to="/private">Private</Link></li> : null }  
                    <li>
                        <button onClick={isAuthenticated() ? logout : login}>
                            {isAuthenticated() ? "Log Out" : "Login" }
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;