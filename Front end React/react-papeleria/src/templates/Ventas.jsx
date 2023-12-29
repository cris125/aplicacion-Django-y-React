import React from 'react'
import { useEffect, useState } from 'react'
import {VerVentas} from '../api/Ventas.api'
export default function Ventas() {
  
  const [resBusqueda,setResBusqueda]= useState([]);
  const [fechaIn,setFechaIn]=useState("");
  const [fechaFin,setFechaFin]=useState("");
  const buscarFecha=(e)=>{
    e.preventDefault();
    console.log(fechaIn);
    console.log(fechaFin);
  }
  const eliRegistosVen=()=>{
    window.location.reload();
  }

  const formatearFechaBusqueda = (fecha) => {
    const opciones = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const fechaFormateada = new Date(fecha).toLocaleDateString(undefined, opciones);
    let nuevaFechaFormateada = "";
    for (let i = 0; i < fechaFormateada.length; i++) {
      if (fechaFormateada[i] === '/') {
        nuevaFechaFormateada += '-';
      } else {
        nuevaFechaFormateada += fechaFormateada[i];
      }
    }
    return nuevaFechaFormateada;
  };
  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = new Date(fecha).toLocaleDateString(undefined, opciones);
    return fechaFormateada;
  };

  const formatearHora = (fecha) => {
    const opciones = { hour: 'numeric',minute: 'numeric', second: 'numeric', hour12: true};
    const fechaFormateada = new Date(fecha).toLocaleString(undefined, opciones);
    return fechaFormateada;
  };

  
  
  useEffect(()=>{
    async function getVentas(){
      const res=await VerVentas();
      setResBusqueda(res.data);
    }
    getVentas();
  },[])
  return (
    <div>
      <div>
      <h1>bucar ventas segun fecha</h1>
      <form onSubmit={buscarFecha} action="">
        
        <div className='contFechaLabrel'>
          <label htmlFor="">Fecha inicial</label>
          <input type="date" value={fechaIn} onChange={(e) => setFechaIn(e.target.value)}/>
        </div>

        <div className='contFechaLabrel'>
          <label htmlFor="">Fecha final</label>
          <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)}/>
        </div>
        <input type="submit" />
      </form>
      <h1>sadsada</h1>
      </div>
      {resBusqueda && resBusqueda.length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>dateTime</th>
                <th>dateTime</th>
                <th>nameProduct</th>
                <th>valueProduct</th>
              </tr>
            </thead>
            <tbody>
              {resBusqueda.map(rea => (
                <tr key={rea.id}>
                  <td>{formatearFechaBusqueda(rea.dateTime)}</td>
                  <td>{formatearHora(rea.dateTime)}</td>
                  <td>{rea.nameProduct}</td>
                  <td>{rea.valueProduct}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      
    </div>
  )
}
