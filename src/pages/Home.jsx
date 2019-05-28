import React from 'react';


const Home = () => {
    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-items">
                    <div className="Pets">
                        <div className="Pets-cover">
                            <span>🐶</span>
                            <div className="Pets-type">
                                Adopción
                    </div>
                        </div>
                        <div className="Pets-content">
                            <div className="Pets-head">
                                <h2>Nombre</h2>
                                <i>🕵</i>
                            </div>
                            <div className="Pets-date">
                                <i>⏲</i>
                                <span>Fecha</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home