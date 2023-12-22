import React from 'react'
import {useForm} from 'react-hook-form'
export default function AgregarExis() {
  return (
    <div>
        <h1>Agregar Existencia</h1>
      <form action="" className='formAgregar'>
        <label htmlFor="">nombre</label>
        <input type="text" id='name' placeholder='nombre'/>

        <label htmlFor="">valor</label>
        <input type="numer" id='value' placeholder='valor'/>

        <label htmlFor="">Existencias</label>
        <input type="numer" id='existences' placeholder='Existencias'/>

        <label htmlFor="">description</label>
        <textarea id='description' rows="3" placeholder='descripcion'></textarea>
  

        <label>foto</label>
        <input type="file" id='photo'/>
        
        <button>xd</button>
      </form>
    </div>
  )
}
