import axios from "axios";
import { Navigate } from "react-router-dom";
const EliminarPuducto=async(id)=>{
  const tokenAccess = localStorage.getItem('token_access');
  const res= (await axios.delete(`http://127.0.0.1:8000/registro/${id}/`, {
        headers: {
          'Content-Type': 'multipart/form-data', Authorization: `Bearer ${tokenAccess}`
        }

    }));
  location.replace('/home');
  return(res);
    
    
}
export default EliminarPuducto;