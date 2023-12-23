

import React, { useState } from 'react';
import {AgreExis} from '../api/agregarExis.api.js'
export default function AgregarExis () {

  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [existences, setExistences] = useState(0);
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [dateTime, setdateTime] = useState('');
  const [user, setuser] = useState(0);
  const formData = new FormData();
  const fechaExistente = new Date('2021-09-23T10:25:43.511Z');
  const fechaFormateada = fechaExistente.toISOString();
  
  
  const handleExis = async (e) => {
    e.preventDefault();
    const tokenAccess = localStorage.getItem('token_access');
    const tokenParts = tokenAccess.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));
    const userId = payload.user_id;

    setdateTime(fechaFormateada);
    setuser(userId);
    
    formData.append('dateTime', dateTime);
    formData.append('name', name);
    formData.append('value', value);
    formData.append('existences', existences);
    formData.append('description', description);
    formData.append('user', user);
    formData.append('photo', photo);

    
    console.log('dateTime:',dateTime);
    console.log('user:',user);
    

    try {
      await AgreExis(formData);

    } catch (error) {
      handleExis();
      console.error('Error al agregar existencia:', error);
     
    }
    

    
  };

  
  return (
    <div>
        <h1>Agregar Existencia</h1>
      <form onSubmit={handleExis} className='formAgregar'>
        <label htmlFor="">nombre</label>
        <input type="text" id='name' placeholder='nombre'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />

        <label htmlFor="">valor</label>
        <input type="number" 
          id='value' 
          placeholder='valor'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <label htmlFor="">Existencias</label>
        <input type="number" 
          id='existences' 
          placeholder='Existencias'
          value={existences}
          onChange={(e) => setExistences(e.target.value)}
        />

        <label htmlFor="">description</label>
        <textarea 
          id='description' rows="3" 
          placeholder='descripcion'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>


        <label>foto</label>
        <input type="file" 
          id='photo'
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
      
        />
        <button>enviar</button>
        
      </form>
    </div>
  )
}
