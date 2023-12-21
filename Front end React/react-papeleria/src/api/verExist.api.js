import axios from 'axios'

export const getExistencias=async()=>{
  
  try{
    const tokenAccess = localStorage.getItem('token_access');
    const tokenRefresh = localStorage.getItem('token_refresh');
    if (tokenAccess) {
      const tokenAc=await axios.post(`http://127.0.0.1:8000/refresh/`, {
        'refresh':tokenRefresh
        
      })
        localStorage.setItem('token_access',tokenAc.data.access);
        return await axios.get('http://127.0.0.1:8000/registro/', {
        headers: {
          Authorization: `Bearer ${tokenAccess}`,
        },
      });   
    }
    
    

  }catch{
    LogoutUser();
    return ("secion caducada",error);
}
    
}
