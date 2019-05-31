import React from 'react';

const PetInfo = props => {
    const { photo, type, adopt, name, gender, description } = props.pet
    console.log(props);

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
                        <div className="PetInfo-type">
                            <button>Adoptar o Cuidad</button>
                        </div>
                        <div className="PetInfo-profile-adopt">
                            <div className="PetInfo-item">
                                <h3>Datos de contacto:</h3>
                                <span>Dueño</span>
                                <h4>Diego Andres</h4>
                                <span>correo:</span>
                                <h4>diego.cardenas@ingenieros.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PetInfo