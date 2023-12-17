import axios from 'axios';
import LogoutUser from './logoutUser.api'

import { Navigate } from 'react-router-dom';
export const  infoUser=async()=>{
    try{
      const tokenAccess = localStorage.getItem('token_access');
      const tokenRefresh = localStorage.getItem('token_refresh');

    if (tokenAccess) {

        const tokenParts = tokenAccess.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        const userId = payload.user_id;
        return await axios.get(`http://127.0.0.1:8000/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${tokenAccess}`,
        }
        
      })   
    }
    }catch{
        
        alert('la sesión caduco');
        LogoutUser();
        return ("secion caducada",error);
    }
      
    

}