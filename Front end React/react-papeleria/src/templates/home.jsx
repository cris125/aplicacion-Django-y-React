import React from 'react'
import Existencias from '../components/verExistencias'
import InfoUser from '../components/infoUser'
export default function home() {
  return (
    <div className='home'>
      <div className='InfoUser'>
        <InfoUser/>
      </div>
      <div className='Existencias'>
        <div className='buscar existencias'>
        
        </div>
        <div className='agregar existencias'>
          
        </div>
        <div className='ver existencias'>
          <Existencias/>
        </div>
      </div>
      
    </div>
    
    
  )
}
