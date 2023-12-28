import axios from "axios";

export const AgregarVentas =async(formData)=>{
    const tokenAccess = localStorage.getItem('token_access');
    return await axios.post('http://127.0.0.1:8000/ventas/',formData,{
        headers: {
           Authorization: `Bearer ${tokenAccess}`
        },
      })
    
}

export const VerVentas =async()=>{
  const tokenAccess = localStorage.getItem('token_access');
    return await axios.get('http://127.0.0.1:8000/ventas/',{
        headers: {
           Authorization: `Bearer ${tokenAccess}`
        },
      });
}

export const ElimRegisVentas =async()=>{
  const tokenAccess = localStorage.getItem('token_access');
    return await axios.delete('http://127.0.0.1:8000/ventas/',{
        headers: {
           Authorization: `Bearer ${tokenAccess}`
        },
      });
}

export const ActualizarExis =async(existences,id)=>{
  const tokenAccess = localStorage.getItem('token_access');
  return await axios.put(`http://127.0.0.1:8000/registro/${id}/`,existences,{
      headers: {
         Authorization: `Bearer ${tokenAccess}`
      },
    })
}