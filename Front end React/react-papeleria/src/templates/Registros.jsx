import React from 'react'
import { useEffect,useState } from 'react'
import {verRegistros} from '../api/registros.api'
export default function Registros() { 
    
    useEffect(()=>{
        async function verReg(){
            const res= await verRegistros();
            console.log(res.data);
        }
        verReg();
    },[]);
  return (
    <div>
      <h1>sasas</h1>
    </div>
  )
}
