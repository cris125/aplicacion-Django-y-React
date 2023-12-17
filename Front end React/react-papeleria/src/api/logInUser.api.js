
import axios from 'axios';


export const userAut = async (username, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/login/', {
          username,
          password,
        });
        const tokenParts = response.data.access.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        const userId = payload.user_id;

        localStorage.setItem('token_access', response.data.access);
        localStorage.setItem('token_refresh', response.data.refresh);
      
        
      } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        if (error.response && error.response.status === 401) {
          alert('ERROR 401: Credenciales Incorrectas.');
        }
      }
};
