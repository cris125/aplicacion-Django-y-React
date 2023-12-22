
import Navegation from './components/navegation'
import Logout from './utiles/logoutUser.jsx'
import RouteProtect from './utiles/routeProtect.jsx'
import './css/App.css'
import AutoRefresh from './utiles/autoRefech.jsx'
import { BrowserRouter, Link, Route,Routes,Navigate } from 'react-router-dom';


function App() {
  
  return (
    
    <div className='App'>
      
    <BrowserRouter>
      <Navegation/>
      <AutoRefresh/>
      <RouteProtect/>
      <Routes>
        <Route path='/logout' element={<Logout/>} />
        
      </Routes>
    </BrowserRouter>
    </div>
    
     
    
  );
}

export default App
