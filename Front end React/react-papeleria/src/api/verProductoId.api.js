import axios from 'axios'

 const VerProductoId =async(id)=>{
    try {
        const tokenAccess = localStorage.getItem('token_access');
        return ( await axios.get(`http://127.0.0.1:8000/registro/${id}`,{
            headers: {
          Authorization: `Bearer ${tokenAccess}`,
        }
        }));
    }catch(error){
        return(console.log(error));
    }
}
export default VerProductoId;