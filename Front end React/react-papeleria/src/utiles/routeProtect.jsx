import React from 'react'
import Home from '../templates/home'
import { Route,Routes,Navigate} from 'react-router-dom';
export default function routeProtect() {
    
    const tokenAccess = localStorage.getItem('token_access');
    if (tokenAccess){
        return (
            <div>
                <Routes>
                    <Route path='/home' element={<Home/>} />
                </Routes>
            </div>
          )
    }else{
        return (
            <div>
                <Routes>
                    <Route path='/home' element={<Navigate to="/login"/>} />
                </Routes>
            </div>
            
            
          )

    }
    
  
}
