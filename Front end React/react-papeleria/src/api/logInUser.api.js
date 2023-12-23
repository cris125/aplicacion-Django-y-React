import axios from 'axios';
import React, { useState } from 'react';

export const userAut = async (username, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/login/', {
          username,
          password,
        });
        
        localStorage.setItem('token_access', response.data.access);
        localStorage.setItem('token_refresh', response.data.refresh);
        
        // Recarga la página después de una autenticación exitosa
        window.location.reload();
        location.replace('/home');
        
        
      } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        if (error.response && error.response.status === 401) {
          alert('ERROR 401: Credenciales Incorrectas.');
        }
        return(console.log(error));

        
      }
};
