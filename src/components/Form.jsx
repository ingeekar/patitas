import React from 'react';

const Form = () => {
    return (
        <div className="Form">
            <div className="Form-head">
                <h2>Dar en adopción</h2>
            </div>
            <div className="Form-item">
                <form>
                    <input type="text" name="name" placeholder="Nombre de tu mascota" />
                    <input type="text" description="description" placeholder="Describe tu mascota" />
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
                    <input type="file" name="photo" />
                    <button>Enviar</button>

                </form>
            </div>
        </div>
    )
}

export default Form;