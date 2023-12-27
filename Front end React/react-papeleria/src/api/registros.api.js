import axios from "axios";
export const verRegistros=async()=>{
    try{
        const tokenAccess = localStorage.getItem('token_access');
        return await axios.get('http://127.0.0.1:8000/ventas/', {
        headers: {
          Authorization: `Bearer ${tokenAccess}`,
        },
      }); 
        
    }catch(error){
        return(console.log(error));

    }
}
export const agregarRegistros=()=>{

}
export const eliminarRegistros=()=>{

}

