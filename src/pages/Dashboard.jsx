import React from 'react';
import Form from './../components/Form';

const Dashboard = () => {
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
                            <img src="/" alt="User" />
                            <span>Nombre:</span>
                            <h4>Diego Andres Cardenas</h4>
                            <span>email: </span>
                            <h4>diego.cardenas@ingenieros.com</h4>
                            <button>Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard