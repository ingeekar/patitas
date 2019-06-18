import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = props => {
    return (
        <div className="Nav">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li>
                    <a onClick={props.showModal}>
                        Dar en adpción
                    </a></li>
                <li><Link to={props.login ? '/panel' : '/login'}>{props.login ? 'Mi cuenta' : 'Iniciar Sesión'} </Link></li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        login: state.login
    };
};

export default connect(mapStateToProps)(Nav)