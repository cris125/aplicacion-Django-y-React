import React from 'react'
import { useEffect, useState } from 'react'
import {VerVentas,ElimRegisVentas} from '../api/Ventas.api'
export default function Ventas() {
  
  const [resBusqueda,setResBusqueda]= useState([]);
  const [fechaIn,setFechaIn]=useState("")
  const [fechaFin,setFechaFin]=useState("");
  const [mensage,setmensage]=useState("");
  const [suma,setSuma]=useState(0)
  const buscarFecha=async(e)=>{
    e.preventDefault();
    const res= await VerVentas();
    

    const newRes =filtrarFechas(res.data,fechaIn,fechaFin);
    let Sum=0
          for (let i=0;i<newRes.length;i++){
            const num=parseInt(newRes[i].valueProduct);
            Sum=Sum+num;}
          setSuma(Sum);
    if(newRes.length===0){
      setmensage("No se encontraron ventas");
    }
    setResBusqueda(newRes);
  }
  const eliRegistosVen=async()=>{
    try{
      const res=await ElimRegisVentas();
      window.location.reload();}
    catch(error){
      console.log(error);}
  }

  const formatearFechaBusqueda = (fecha) => {
    const opciones = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const fechaFormateada = new Date(fecha).toLocaleDateString(undefined, opciones);
    return fechaFormateada;
  };

  const formatearHora = (fecha) => {
    const opciones = { hour: 'numeric',minute: 'numeric', second: 'numeric', hour12: true};
    const fechaFormateada = new Date(fecha).toLocaleString(undefined, opciones);
    return fechaFormateada;
  };
  const filtrarFechas = (res, fechaInicio, fechaFin) => {
    const fechaInicioDate = new Date(fechaInicio);
    const fechaFinDate = new Date(fechaFin);
    fechaFinDate.setDate(fechaFinDate.getDate() + 1);
    fechaInicioDate.setDate(fechaFinDate.getDate() - 1);
    const fechaInicioTimestamp = fechaInicioDate.getTime();
    const fechaFinTimestamp = fechaFinDate.getTime();

    
    return res.filter((registro) => {
      const fechaTimestamp = new Date(registro.dateTime).getTime();
      return fechaTimestamp >= fechaInicioTimestamp && fechaTimestamp <= fechaFinTimestamp;
    });
  };
  useEffect(()=>{
    async function getExis(){
        const res= await VerVentas();
        if (res.data && res.data.length > 0) {
          const ultimos10Registros = res.data.slice(-10);
          setResBusqueda(ultimos10Registros);
          let Sum=0
          for (let i=0;i<ultimos10Registros.length;i++){
            const num=parseInt(ultimos10Registros[i].valueProduct);
            Sum=Sum+num;}
          setSuma(Sum);
          
        }else{
          setmensage("No hay ventas");
        }
        
        

        
    }
    getExis();
},[]);
  return (
    <div className='RegisVentas'>
      <div className='FormVen'>
      <h1>Ventas</h1>
      <form onSubmit={buscarFecha} action="">
        <div className='contInput'>
        <div className='contFechaLabrel'>
          <label htmlFor="">Fecha inicial</label>
          <input className='fecha' type="date" value={fechaIn}   onChange={(e) => setFechaIn(e.target.value)} required/>
        </div>

        <div className='contFechaLabrel'>
          <label htmlFor="">Fecha final</label>
          <input className='fecha' type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} required/>
        </div>
        </div>
        
        <input className="Submit" type="submit" value="Buscar"/>
      </form>
      </div>
      {resBusqueda && resBusqueda.length > 0 ? (
        
        <div className='tablaReg'>
          <h1>Fechas encontradas</h1>
          
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Nombre Producto</th>
                <th>Valor Producto</th>
              </tr>
            </thead>
            <tbody>
              {resBusqueda.map(rea => (
                <tr key={rea.id}>
                  <td>{formatearFechaBusqueda(rea.dateTime)}</td>
                  <td>{formatearHora(rea.dateTime)}</td>
                  <td>{rea.nameProduct}</td>
                  <td>${rea.valueProduct-0}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='contP-Button'>
            <p><span>Suma:</span>${suma}</p>
            <button onClick={eliRegistosVen}>Eliminar Todos los Registros</button>
          </div>
          
        </div>
      ):(<div className='tablaReg'>
        <h1>{mensage}</h1>
      </div>)}
      
      
    </div>
  )
}
