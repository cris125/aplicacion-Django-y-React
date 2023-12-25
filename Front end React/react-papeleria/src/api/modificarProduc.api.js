import axios from "axios";

const ModificarProducto=async(id,formData)=>{
    
    const tokenAccess = localStorage.getItem('token_access');
    return (await axios.put(`http://127.0.0.1:8000/registro/${id}/`,formData,{
        headers: {
            Authorization: `Bearer ${tokenAccess}`,
            }
    }));
    
}
export default ModificarProducto;