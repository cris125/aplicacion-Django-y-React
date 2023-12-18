import React from 'react'
import { BrowserRouter, Link, Route,Routes,Navigate } from 'react-router-dom';
import icon from '../assets/imgPapeleria.jpg'
import { Icon } from '@iconify/react';


export default function navegation() {
  const tokenAccess = localStorage.getItem('token_access');
  if (tokenAccess){
      return(<dev>
      <header className='navegation'>
      <img src={icon} alt="" />
      
      <div className='linkCenter'>
        <Link className='link' to='/home'><Icon icon="material-symbols:home-outline" />Home</Link>
        <Link className='link' to='/logout'><Icon icon="material-symbols:logout" />logout</Link>
        
        
        
      </div>    

    </header>
      </dev>)
  }else{
    return(
      <header className='navegation'>
        <img src={icon} alt="" />
        <div className='linkCenter'>
            <Link className='link' id='login' to='/login'>
            <Icon icon="material-symbols:login"/>Login </Link>
        </div>
      </header>
      
    )
  }
  
}
