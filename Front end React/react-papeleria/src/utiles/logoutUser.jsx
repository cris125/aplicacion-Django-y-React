import { Navigate } from 'react-router-dom';

const LogoutUser=()=>{
    
    const tokenAccess = localStorage.getItem('token_access');
    if (tokenAccess){
        localStorage.removeItem('token_access');
        localStorage.removeItem('token_refresh');
        window.location.reload();
    }
    return (<Navigate to="/login"/>)
}
export default LogoutUser;