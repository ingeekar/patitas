import React, { useState } from 'react';
import { storage, database } from '../utils/firebase'
import moment from 'moment'

const Form = () => {


    const [petPhoto, setPetPhoto] = useState('')
    const [sendForm, setSendForm] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        const form = new FormData(event.target)
        const newDate = moment(new Date()).format('YYYY-MM-DD[T]HH:mm:ss.SSSZZ')




        const data = {
            'adopt': form.get('adopt'),
            'date': newDate,
            'description': form.get('description'),
            'gender': form.get('gender'),
            'name': form.get('name'),
            'photo': petPhoto,
            'profilePic': '',
            'type': form.get('type'),
            'userContact': '',
            'userName': ''
        }

        database.ref('pets').push(data)
            .then(() => setSendForm(true))
            .catch(() => setSendForm(false))
    }

    const onChangeFile = event => {
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const name = (+new Date()) + file.name;
        const uploadFile = storageRef.child(name).put(file);
        uploadFile
            .then((snapshot) => {
                snapshot.ref.getDownloadURL()
                    .then(downloadURL => setPetPhoto(downloadURL));
            })
    }

    return (
        <div className="Form">
            <div className="Form-head">
                <h2>Dar en adopción</h2>
            </div>
            {sendForm &&
                <div className="Form-send">
                    <span>Guardado con extito!</span>
                </div>
            }

            {!sendForm &&
                <div className="Form-item">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Nombre de tu mascota" />
                        <input type="text" name="description" placeholder="Describe tu mascota" />
                        <select name="type" >
                            <option value="" disabled defaultValue>Seleccionar</option>
                            <option value="cat">Gato</option>
                            <option value="dog">Perro</option>
                        </select>

                        <select name="gender" >
                            <option value="" disabled defaultValue>Seleccionar</option>
                            <option value="female">Hembra</option>
                            <option value="male">Macho</option>
                        </select>

                        <select name="adopt" >
                            <option value="" disabled defaultValue>Seleccionar</option>
                            <option value="true">Dar en adopción</option>
                            <option value="false">Cuidar</option>
                        </select>
                        <input type="file" onChange={onChangeFile} name="photo" />
                        <button>Enviar</button>

                    </form>
                </div>
            }
        </div>
    )
}

export default Form;