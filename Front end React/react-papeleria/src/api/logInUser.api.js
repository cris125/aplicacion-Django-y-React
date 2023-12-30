import axios from 'axios';
import React, { useState } from 'react';

export const userAut = async (username, password) => {
    
    const response = await axios.post('http://127.0.0.1:8000/login/', {
          username,
          password,
        });
        
    localStorage.setItem('token_access', response.data.access);
    localStorage.setItem('token_refresh', response.data.refresh);
        
       // Recarga la página después de una autenticación exito
    window.location.reload();
    location.replace('/home');
        
        

        
      
};
