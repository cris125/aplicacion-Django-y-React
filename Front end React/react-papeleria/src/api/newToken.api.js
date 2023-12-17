import axios from 'axios';
import LogoutUser from './logoutUser.api'
export const NewToken=async()=>{
    await axios.post('http://127.0.0.1:8000/refresh', {
            tokenRefresh
        })
        const tokenAccess = responseRefresh.data.access;
        localStorage.setItem('token_access', responseRefresh.data.access);
        alert(tokenRefresh);
}