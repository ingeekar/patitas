import React from 'react';
import moment from 'moment'

const PetItem = props => {
    moment.locale('es')
    const date = moment(props.pet.date).fromNow()
    console.log(props.pet.photo);

    const { photo, type, adopt, name, gender, description } = props.pet
    return (
        <div className="Pets">
            <div className="Pets-cover"
                style={{ background: `url('${photo}')` }}
            >
                <span>
                    {type === 'dog' ? '🐶' : '🐱'}
                </span>
                <div className="Pets-type">
                    {adopt === 'true' ? 'Adopción' : 'Cuidado'}
                </div>
            </div>
            <div className="Pets-content">
                <div className="Pets-head">
                    <h2>{name}</h2>
                    <i className={gender === 'male' ? 'fas fa-mars' : "far fa-venus"}></i>
                </div>
                <div className="Pets-date">
                    <i className="fas fa-calendar-alt"></i>
                    <span>{date}</span>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default PetItem 