import axios from 'axios'

export const getExistencias=()=>{
    return axios.get('http://127.0.0.1:8000/registro/');
}
