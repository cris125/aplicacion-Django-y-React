import React, { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const LoginForm = ({ onLogin, setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        username,
        password,
      });

     
      localStorage.setItem('token_access', response.data.access);
      localStorage.setItem('token_refresh', response.data.refresh);
      // Llamar a la función proporcionada por la prop para indicar que el inicio de sesión está completo
      onLogin({
        username,
        token_access: response.data.access,
        token_refresh: response.data.refresh,
      });
      setAuth(true);
      
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      if (error.response && error.response.status === 401) {
        alert('ERROR 401: Credenciales Incorrectas.');
      }
    }
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
            autoComplete="current-password"
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
            
            autoComplete="current-password"
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





