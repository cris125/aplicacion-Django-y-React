import React from 'react'
import Home from '../templates/home'
import LoginForm from '../templates/login'
import AgreExis  from '../components/AgregarExis'
import ModificarExis from '../templates/ModificarExis'
import Ventas from '../templates/Ventas'
import CrearUsuario from '../templates/crearUsuario'
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
                    <Route path='/home/Registros' element={<Ventas/>}/>
                   {/* Redirigir '/' a '/home' */}
                   <Route path="/*" element={<Navigate to="/home" />} />
                </Routes>
           
                
            
          )
    }else{
        return (
     
                <Routes>
                    <Route path='/home' element={<Navigate to="/login"/>} />
                    <Route path='/' element={<Navigate to="/login"/>} />
                    <Route path='/nuevoUsuario' element={<CrearUsuario/>}/>
                    <Route path='/login' element={<LoginForm />} />                    

                    {/* Redirigir '/' a '/login' */}
                    <Route path="/*" element={<Navigate to="/login" />} />
                </Routes>
           
            
            
          )

    }
    
  
}
