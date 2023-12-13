import React from 'react'
import { BrowserRouter, Link, Route,Routes,Navigate } from 'react-router-dom';
import icon from '../assets/imgPapeleria.jpg'
import { Icon } from '@iconify/react';
var aut=1;
function userxd (){
  aut=1;
  console.log(1);
}
export default function navegation() {
  return (
    
    <header className='navegation'>
      
      <img src={icon} alt="" />
      
        <div className='linkCenter'>
        <Link className='link' to='/home'><Icon icon="material-symbols:home-outline" />Home</Link>
      
    
        {
          aut ?  <Link onClick={userxd} className='link' id='login' to='/login'>
            <Icon icon="material-symbols:login" />Login </Link>:<h1>hola</h1>
        }
        </div>
      
          

    </header>
  )
}
