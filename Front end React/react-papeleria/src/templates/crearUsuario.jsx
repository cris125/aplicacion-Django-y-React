import React from 'react'
import { useEffect ,useState} from 'react'
import {NewUser} from '../api/newUser.api'

export default function crearUsuario() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [passwordVer,setPasswordVer]=useState('');
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');  
  const [menErrorContr,setMenErrorContr]=useState(false);
  const [menErrorUsu,setMenErrorUsu]=useState(false);
  const handleCrearUs=async(e)=>{
    e.preventDefault();
    if(passwordVer===password){
      const account = {
        lastChangeDate: new Date().toISOString(),
        isActive: true,
      };
      const userData = {
        username,
        password,
        name,
        email,
        account,
      };
      try{
        await NewUser(userData);  
      }catch(error){
        if (error.response && error.response.status === 400) {
          // Manejar el error 400 aquí
          console.log('Error 400: Datos de usuario inválidos');
        } else {
          // Manejar otros errores
          console.error('Error:', error.message);
        }
        console.log(error);
      }

    }else{
      setUsername('');
      setPassword('');
      setPasswordVer('');
      setName('');
      setEmail('');
      setMenErrorContr(true);}

  }

  return (
    <div>
      {menErrorContr?<h1>Error: Las contraseñas no coinciden</h1>:<></>}
      <form onSubmit={handleCrearUs} className='formCrearUs'>
      <div className='label-imput'>
          {menErrorUsu?<></>:<h1>Pon otro Username</h1>}
          <label htmlFor="">Nombre De Usuario</label>
          <input type="text" id='username' placeholder='nombre'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
          required
          />
      </div>
      <div className='label-imput'>
          <label htmlFor="">Contraseña</label>
          <input type="password" id='password' placeholder='contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
          required
          
          />
      </div>
      <div className='label-imput'>
          <label htmlFor="">Confirma la contraseña</label>
          <input type="password" id='passwordConfi' placeholder='contraseña de nuevo'
          value={passwordVer}
          onChange={(e) => setPasswordVer(e.target.value)}
        
          required
          />
      </div>
      
      <div className='label-imput'>
          <label htmlFor="">Nombre</label>
          <input type="text" id='name' placeholder='Nombre'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
      </div>

      <div className='label-imput'>
          <label htmlFor="">Email</label>
          <input type="text" id='email' placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </div>
        
      
        <input className='Submit' type='submit' value='Crear Usuario' />

      </form>
    </div>
  )
}
