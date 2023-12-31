
import Navegation from './components/navegation'
import RouteProtect from './utiles/routeProtect.jsx'
import './css/App.css'
import './css/Ventas.css'

import AutoRefresh from './utiles/autoRefech.jsx'
import { BrowserRouter, Link, Route,Routes,Navigate } from 'react-router-dom';


function App() {
  
  return (
    
    <div className='App'>
      
    <BrowserRouter>
      <Navegation/>
      <AutoRefresh/>
      <RouteProtect/>
      
    </BrowserRouter>
    </div>
    
     
    
  );
}

export default App
