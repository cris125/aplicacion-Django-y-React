import React from 'react'

export default function crearUsuario() {
  return (
    <div>
      <form onSubmit={handleExis} className='formModif'>
      <div className='label-imput'>
          <label htmlFor="">Nombre  del producto</label>
          <input type="text" id='name' placeholder='nombre'
          value={name}
          onChange={(e) => setName(e.target.value)}
          
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
        <input className='Submit' type='submit' value='Modificar Producto' />

      </form>
    </div>
  )
}
