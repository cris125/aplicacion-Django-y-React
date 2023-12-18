import axios from 'axios';
import LogoutUser from '../utiles/logoutUser';

import { Navigate } from 'react-router-dom';
export const  infoUser=async()=>{
   
    try{
      const tokenAccess = localStorage.getItem('token_access');
      const tokenRefresh = localStorage.getItem('token_refresh');

    if (tokenAccess) {
      const tokenAc=await axios.post(`http://127.0.0.1:8000/refresh/`, {
        'refresh':tokenRefresh
        
      })
        localStorage.setItem('token_access',tokenAc.data.access);
        const tokenParts = tokenAccess.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        const userId = payload.user_id;
        return await axios.get(`http://127.0.0.1:8000/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${tokenAc.data.access}`,
        }
        
      })   
    }
    }catch{
        LogoutUser();
        return ("secion caducada",error);
    }
      
    

}