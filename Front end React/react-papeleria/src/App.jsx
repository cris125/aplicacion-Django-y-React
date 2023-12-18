import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Intro from './components/intro'
import Navegation from './components/navegation'
import LoginForm from './templates/login'
import Home from './templates/home'
import Logout from './utiles/logoutUser.jsx'
import RouteProtect from './utiles/routeProtect.jsx'
import './css/App.css'
import { BrowserRouter, Link, Route,Routes,Navigate } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)
  
  return (
    
    <div className='App'>
      
    <BrowserRouter>
      <Navegation/>
      <RouteProtect/>
      <Routes>
        
        <Route path='/' element={<Navigate to="/login"/>} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/logout' element={<Logout/>} />
        
      </Routes>
    </BrowserRouter>
    </div>
    
     
    
  );
}

export default App
