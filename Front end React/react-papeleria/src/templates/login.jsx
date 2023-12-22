import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { redirect } from 'react-router-dom';
import {userAut} from '../api/logInUser.api'
const LoginForm = () => {
  const {register}=useForm();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    userAut (username, password)
    setUsername(''); 
    setPassword('');
  };

  return (
    <div className='login'>
      <h1>Bienvenido</h1>
      <form onSubmit={handleLogin}>
        <div className='username'>
          <label htmlFor='username'>Username</label>
          <input
            className='impUserN'
            type='text'
            id='username'
           
            placeholder='Ingresa tu usuario aquí'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
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
            
          />
        </div>

        <input className='Submit' type='submit' value='Ingresar' />
      </form>
      <button>Crear Cuenta</button>
    </div>
  );
};

export default LoginForm;





