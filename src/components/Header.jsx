import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-container">
                <div className="Header-content">
                    <div className="Header-logo">
                        <Link to="/" >
                            <span>🐶</span>
                            <h1>Patitas</h1>
                        </Link>
                    </div>
                    <div className="Header-nav">
                        <Nav />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header