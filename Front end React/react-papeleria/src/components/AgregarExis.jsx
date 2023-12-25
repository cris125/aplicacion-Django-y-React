import React, { useState } from 'react';
import {AgreExis} from '../api/agregarExis.api.js'
import { Icon } from '@iconify/react';


export default function AgregarExis () {

  const [name, setName] = useState('');
  const [value, setValue] = useState(null);
  const [existences, setExistences] = useState(null);
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [mensage,setMensage]=useState(false);

  function mostrarMen(funcionAtrasada, tiempoDeEspera = 4000) {
    setMensage(true);
    setTimeout(funcionAtrasada, tiempoDeEspera);
  }
  function ocultarMen() {
    setMensage(false);
  }
  
  const handleExis = async (e) => {
    e.preventDefault();

    const tokenAccess = localStorage.getItem('token_access');
    const tokenParts = tokenAccess.split('.');
    const payload = JSON.parse(atob(tokenParts[1]));
    const userId = payload.user_id;

    const fechaExistente = new Date('2021-09-23T10:25:43.511Z');
    const fechaFormateada = fechaExistente.toISOString();

    const formData = new FormData();
    formData.append('dateTime', fechaFormateada);
    formData.append('name', name);
    formData.append('value', value);
    formData.append('existences', existences);
    formData.append('description', description);
    formData.append('user', userId);
    formData.append('photo', photo);

    try {
      await AgreExis(formData);
      setName('');
      setValue(0);
      setExistences(0);
      setDescription("");
      setPhoto(null);
      mostrarMen(ocultarMen);
    } catch (error) {
      console.error('Error al agregar existencia:', error); 
    }
 
  };

  
  return (
    <div className='AgreExis'>
        
        {mensage ?<div className='ventanaMens'>
          <div className='cuadro'>

          
          <button className='btnBor' onClick={ocultarMen}><Icon icon="material-symbols:close"/></button>
              <h1>¡Producto Registrado con Exito!</h1>
              <Icon className='icon' icon="material-symbols:done"/>
              
         </div>    
                  </div>:<></>}
      <div className='contFormNewExis'>
      <h1>Nuevo Producto</h1>
      <form onSubmit={handleExis} className='formAgregar'>
      <div className='label-imput'>
          <label htmlFor="">Nombre  del producto</label>
          <input type="text" id='name' placeholder='nombre'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
      </div>
        
      <div className='label-imput'>
          <label htmlFor="">Valor del producto</label>
        <input type="number" 
          id='value' 
          placeholder='valor'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
        
      <div className='label-imput'>
          <label htmlFor="">Existencias del producto</label>
        <input type="number" 
          id='existences' 
          placeholder='Existencias'
          value={existences}
          onChange={(e) => setExistences(e.target.value)}
        />
      </div>
        
      <div className='label-imput'>
          <label htmlFor="">Descripción del producto</label>
        <textarea 
          id='description' rows="3" 
          placeholder='descripcion'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
        

      <div className='label-imput'>
          <label>Foto del producto</label>
          
          <input type="file" 
            id='photo'
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
        
          />
      </div>
        <input className='Submit' type='submit' value='Crear Existencia' />

      </form>
      </div>
      
    </div>
  )
}
