import React from 'react'
import Home from '../templates/home'
import LoginForm from '../templates/login'
import AgreExis  from '../components/AgregarExis'
import ModificarExis from '../components/ModificarExis'
import { Route,Routes,Navigate} from 'react-router-dom';

export default function routeProtect() {
    
    const tokenAccess = localStorage.getItem('token_access');
    if (tokenAccess){
        return (
       
                <Routes>
                    <Route path='/' element={<Navigate to="/home"/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/login' element={<Navigate to="/home"/>} />
                    <Route path='/home/AgregarExistencia' element={<AgreExis/>}/>
                    <Route path='/home/ModificarExis/:id' element={<ModificarExis/>}/>
                </Routes>
           
                
            
          )
    }else{
        return (
     
                <Routes>
                    <Route path='/home' element={<Navigate to="/login"/>} />
                    <Route path='/' element={<Navigate to="/login"/>} />
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/home/AgregarExistencia' element={<Navigate to="/login"/>}/>
                </Routes>
           
            
            
          )

    }
    
  
}
