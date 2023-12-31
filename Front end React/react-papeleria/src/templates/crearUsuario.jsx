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

  const handlePaste = (e) => {
    e.preventDefault();
  }
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
          setUsername('');
          setPassword('');
          setPasswordVer('');
          setName('');
          setEmail('');
          setMenErrorUsu(true);
        } else {
          console.error('Error:', error.message);
        }
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
    <div className='crearUsu'>
      
      <form onSubmit={handleCrearUs} className='formCrearUs'>
      <h1>Crear Nuevo Usuario</h1>
      <div className='label-imput'>
          {menErrorUsu?<span> <p className='error'>Error: Pon otro nombre de usuario <br/> este nombre ya esta ocupado</p></span>:<></> }
          <label htmlFor="">Nombre De Usuario</label>
          <input type="text" id='username' placeholder='nombre'
          value={username}
          autoComplete="username"
          onChange={(e) => setUsername(e.target.value)}
          
          required
          />
      </div>
      
      <div className='label-imput'>
          {menErrorContr?<span><p className='error'>Error: Las contraseñas no coinciden</p></span>:<></>}
          <label htmlFor="">Contraseña</label>
          <input type="password" id='password' placeholder='contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          onPaste={handlePaste}
          required
          
          />
      </div>
      <div className='label-imput'>
          <label htmlFor="">Confirma la contraseña</label>
          <input type="password" id='passwordConfi' placeholder='contraseña de nuevo'
          value={passwordVer}
          onChange={(e) => setPasswordVer(e.target.value)}
          autoComplete="new-password"
          onPaste={handlePaste}
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
