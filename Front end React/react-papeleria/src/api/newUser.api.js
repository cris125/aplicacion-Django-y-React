import axios from "axios";

export const NewUser=async(formData)=>{
    const response=await axios.post("http://127.0.0.1:8000/user/",formData);
    localStorage.setItem('token_access', response.data.access);
    localStorage.setItem('token_refresh', response.data.refresh);
        
       // Recarga la página después de una autenticación exito
    window.location.reload();
    location.replace('/home'); 
}