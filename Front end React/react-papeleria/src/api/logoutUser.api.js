const LogoutUser=()=>{
    localStorage.removeItem('token_access');
    localStorage.removeItem('token_refresh');
}
export default LogoutUser;