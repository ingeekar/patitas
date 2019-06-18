import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../utils/firebase';
import Form from './../components/Form';
import { setLogin, setUser } from './../actions/index';




const Dashboard = props => {

    const logoutFacebook = () => {
        auth().signOut()
            .then(() => {
                props.history.push('/');
                props.setUser({});
                props.setLogin(false);
            })
    }

    return (
        <div className="Dashboard">
            <div className="Dashboard-container">
                <div className="Dashboard-content">
                    <div className="Dashboard-form">
                        <Form />
                    </div>
                    <div className="Dashboard-profile">
                        <h2>Perfil</h2>
                        <div className="Dashboard-profile-info">
                            <img src={props.user.photoURL} alt={props.user.displayName} />
                            <span>Nombre:</span>
                            <h4>{props.user.displayName}</h4>
                            <span>email: </span>
                            <h4>{props.user.email}</h4>
                            <button onClick={logoutFacebook}>Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    setUser,
    setLogin
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        login: state.login,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)