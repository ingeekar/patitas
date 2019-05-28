import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="Nav">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/panel/">Dar en adpción</Link></li>
                <li><Link to="/login">Mi cuenta</Link></li>
            </ul>
        </div>
    )
}

export default Nav