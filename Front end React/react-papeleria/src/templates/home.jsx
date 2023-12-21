import React from 'react'
import Existencias from '../components/verExistencias'
import BusExis from '../components/BuscarExis'
import {Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
export default function home() {
  return (
    <div className='home'>
      
      <div className='Existencias'>
        <div className='ContBusYExis'>
          <div className='ContBuscarExisResul'>
            <BusExis/>
          </div>
        </div>
        <h1 className='h1home'>Productos</h1>
        <Existencias/>
        
      </div>
      
    </div>
    
    
  )
}
