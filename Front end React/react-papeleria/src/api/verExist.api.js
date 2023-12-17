import axios from 'axios'

export const getExistencias=()=>{
    const tokenAccess = localStorage.getItem('token_access');
    return axios.get('http://127.0.0.1:8000/registro/', {
        headers: {
          Authorization: `Bearer ${tokenAccess}`,
        },
      });
}
