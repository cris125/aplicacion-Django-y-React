import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {userAut} from '../api/logInUser.api'
import { Link } from 'react-router-dom';
const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mens,setMens]= useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      setMens(false);
      await userAut (username, password);
      
    }catch{
      setMens(true);
    }
    setUsername(''); 
    setPassword('');
  };

  return (
    <div className='login'>
      <h1>Bienvenido</h1>
      <form onSubmit={handleLogin}>
        {mens?<p className='mensajeErrorLogin'><span>Contraseña o Usuario incorrecto</span></p>:<></>}
        
        <div className='username'>
          <label htmlFor='username'>Username</label>
          <input
            className='impUserN'
            type='text'
           
            placeholder='Ingresa tu usuario aquí'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='password'>
          <label htmlFor='password'>Password</label>
          <input
            className='impPass'
            type='password'
            id='password'
            
            
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            
          />
        </div>

        <input className='Submit' type='submit' value='Ingresar' />
      </form>
      <Link  to={'/nuevoUsuario'} className='button'>Crear Cuenta</Link>
      
    </div>
  );
};

export default LoginForm;





