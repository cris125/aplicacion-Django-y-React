import React from 'react'
import {Link } from 'react-router-dom';
import icon from '../assets/imgPapeleria.jpg'
import { Icon } from '@iconify/react';
import ImgUser from '../assets/imgUser.png'
import InfoUser from './infoUser'

export default function navegation() {
  const tokenAccess = localStorage.getItem('token_access');
  if (tokenAccess){
      return(
      <header className='navegation'>
      <link rel="icon" href={icon} />

      <img src={icon} alt="" />
      
      <div className='linkCenter'>
        <Link className='link' to='/home'><Icon icon="material-symbols:home-outline" />Inicio</Link>
        
        <Link className='link' to='/home/registros'><Icon icon="material-symbols:point-of-sale" />Registros</Link>
        <Link className='link' to='/logout'><Icon icon="material-symbols:logout" />Cerrar<br></br>  Sesión</Link>
        
      </div>
      
      <div className='infoUserCont'>
        <img src={ImgUser} alt="" />
        <div className='info'><InfoUser className='xd'/></div>
      </div>
      

    </header>
      )
  }else{
    return(
      <header className='navegation'>
        <img src={icon} alt="" />
        <div className='linkCenter'>
            <Link className='link' id='login' to='/login'>
            <Icon icon="material-symbols:login"/>Login </Link>
        </div>
        <div className='infoUserCont'>
        <img  alt="" />
        </div>
      </header>
      
    )
  }
  
}
