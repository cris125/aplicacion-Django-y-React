import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe por defecto

    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        username,
        password,
      });

      // Manejar la respuesta, por ejemplo, almacenar el token en el estado global
      console.log('Token:', response.data.access_token);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
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
            placeholder='Ingresa tu contraseña aquí'
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

export default Login;

