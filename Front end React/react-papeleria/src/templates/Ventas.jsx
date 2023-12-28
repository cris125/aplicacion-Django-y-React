import React from 'react'
import { useEffect } from 'react'
import {VerVentas} from '../api/Ventas.api'
export default function Ventas() {
  useEffect(()=>{
    async function getVentas(){
      const res=await VerVentas();
      console.log(res.data);
    }
    getVentas();
  },[])
  return (
    <div>
      <h1>sadsada</h1>
    </div>
  )
}
