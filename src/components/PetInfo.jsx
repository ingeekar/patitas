import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/Login';

const PetInfo = props => {
    const { photo, type, adopt, whatsapp, name, phone, gender, description, userName, userContact } = props.pet
    console.log(whatsapp);


    return (
        <div className="PetInfo">
            <div className="PetInfo-container">
                <div className="PetInfo-content">
                    <div className="PetInfo-avatar">
                        <img src={photo} alt={name} />
                    </div>
                    <div className="PetInfo-profile">
                        <h2>{name}</h2>
                        <span>
                            {type === 'dog' ? '🐶' : '🐱'}
                        </span>
                        <p>{description}
                            <i className={gender === 'male' ? 'fas fa-mars' : "far fa-venus"}></i>
                        </p>
                        <div className="PetInfo-btn">
                            Adoptar
                        </div>
                        {props.login ?
                            <div className="PetInfo-profile-adopt">
                                <div className="PetInfo-item">
                                    <h3>Datos de contacto:</h3>
                                    <span>Dueño</span>
                                    <h4>{userName}</h4>
                                    <span>correo:</span>
                                    <h4>{userContact}</h4>
                                    <span>{whatsapp === 'true' ? 'WhatsApp' : 'Teléfono:'}</span>
                                    <h4>
                                        {
                                            whatsapp === 'true' ?
                                                <a href={`https://wa.me/57${phone}?text=Hola! Quiero adoptar a ${name} lo vi en la pagina de mascotas`} target='_blank'> Iniciar Chat: {phone}</a>
                                                : <a href={`tel:+57${phone}`} target='_blank'>Llamar ahora: {phone} </a>
                                        }
                                    </h4>

                                </div>
                            </div>
                            :
                            <div>
                                <p>
                                    Crea tu cuenta o inicia sesión para ver los datos de contacto
                                </p>
                                <Login />
                            </div>}

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        login: state.login
    };
};

export default connect(mapStateToProps)(PetInfo)