import React from 'react'
import { Icon } from '@iconify/react';
import {  Link } from 'react-router-dom';
import {useEffect , useState} from 'react'
import {getExistencias} from '../api/verExist.api'
import {AgregarVentas,ActualizarExis} from '../api/Ventas.api'
import VerProductoId from '../api/verProductoId.api'

export default function BuscarExis() {
  const [existencias,setExist] =useState([]);
  const [BusExis,setBus]=useState([]);
  const [add,setadd]=useState("");
  const [existenciaVent,setExistenciaVen]=useState([]);
  const [cantidadVen,setCantidadVen]=useState(1);
  const [venta,setVenta]=useState(false);
  const [menErrorVenta,setMenErrorVenta]=useState(false);
  const nueVenta=async(e)=>{
    e.preventDefault();
    const fechaExistente = new Date();
    const fechaFormateada = fechaExistente.toISOString();
    const nuevExis=(existenciaVent.existences)-cantidadVen;
    if (nuevExis>=0){
        try{
            const DataVent= new FormData();
            DataVent.append('dateTime',fechaFormateada);
            DataVent.append('nameProduct',existenciaVent.name);
            DataVent.append('valueProduct',existenciaVent.value);
            DataVent.append('registro',existenciaVent.id);
            await AgregarVentas(DataVent);
            const DataExis= new FormData();
            DataExis.append('existences',nuevExis);
            await ActualizarExis(DataExis,existenciaVent.id);
            alert("Producto registrdo con exito");
            
            window.location.reload();
            
            
            
        }catch(error){
            console.log(error);}
    }else{
        setMenErrorVenta(true);
    }

}
  const ventanaVenta=async(id)=>{
    try{
        const res = await VerProductoId(id);
        setVenta(true);
        setExistenciaVen(res.data);
    }catch(error){
        console.log(error);}
    
  }
  const CerrarVentana=()=>{
    setMenErrorVenta(false);
    setVenta(false);}

  const handleSearch = async (e) => {
    e.preventDefault();
    setBus('');
    getExis(BusExis);
  };
  const getExis =async(Busq)=>{
    let a=[];
    let cont=0;
    const res= await getExistencias();
    for(let i=0;i<(res.data).length;i++){
      if(res.data[i].description.includes(Busq)){
        
        const s={id:res.data[i].id ,
                description:res.data[i].description,
                name:res.data[i].name,
                photo:res.data[i].photo,
                value:res.data[i].value,
                existences:res.data[i].existences}
        a.push(s);
      }else{cont++;}  
    }
    if(cont===(res.data).length){
      setadd("No se encontrados Productos");
      setExist(a);
    }else{
      setadd("Productos Encontrados "+'"'+Busq+'"');
      setExist(a);}
    
}

  return (
    <div >
      {venta ? 
        <div className='mensage'>
            <div className='CuadroVent'>
            <button onClick={CerrarVentana}><Icon icon="material-symbols:close"/></button>
            <h1 className='Vender'>Vender {existenciaVent.name}</h1>
            <div  className='Exis'>
            <img className='Img' src={`http://127.0.0.1:8000${existenciaVent.photo}`} alt={existenciaVent.name} />
            <div className='datelles'>
                <h1>Nombre: {existenciaVent.name}</h1>
                <h1>Valor: ${existenciaVent.value-0}</h1>  
                <h1>Existencias: {existenciaVent.existences-0}</h1>
                <div className='contDesc'>
                    <h1>Description..</h1>
                    <h1 className='h1Desc'>{existenciaVent.description}</h1> 
                </div>

            </div>
            
            
            </div>
            {menErrorVenta ? <div>
            <span><p className='MenErrorVen'>ESTE PRODUCTO NO TIENE <br></br>EXISTENCIAS PARA LA VENTA</p></span>
            </div> :<></>}
            <form className='formVent' onSubmit={nueVenta}>
                <label>Numero de Productos vendidos</label>
                <input type="number" value={cantidadVen} 
                onChange={(e) => setCantidadVen(e.target.value)}/>

                <input type="submit" className='SubmitVender' value="vender " />
            </form>
            
            </div>
            
        </div>:<></>}
      <div className='ContBuscarExis'>
        
        <div className='BuscarExis'>
        
          <form onSubmit={handleSearch}>
            <input 
            value={BusExis}
            onChange={(e) => setBus(e.target.value)}
            
            type="text" />
            <button><Icon icon="material-symbols:search"/></button>
          </form>
        </div>
        
        <div className='agregar existencias'>
              <Link className='link' to='/home/AgregarExistencia' >
              <Icon icon="material-symbols:add"/>Agregar</Link>
        </div>
      </div>
      {BusExis ? <></>:<div className='fondoNegro'>
      <h1 className='h1home'>{add}</h1>
    
    <div className='verExis'>
    {existencias.map(exi =>(
        
        <div key={exi.id} className='Exis'>
            <img src={`http://127.0.0.1:8000${exi.photo}`} alt={exi.name} />
            <div className='datelles'>
                <h1>Nombre: {exi.name}</h1>
                <h1>Valor: ${exi.value-0}</h1>  
                <h1>Existencias: {exi.existences-0}</h1>
                <div className='contDesc'>
                    <h1>Description..</h1>
                    <h1 className='h1Desc'>{exi.description}</h1> 
                </div>
                
                  
                
                <div className='contenedorlinks'>
                  <Link onClick={()=>ventanaVenta(exi.id)} className='link' >Vender</Link>
                  <Link className='link' to={`/home/ModificarExis/${exi.id}`}>Modificar</Link>
                </div>

            </div>
            
            
        </div>
      ))}
    </div>
    </div>}
      
     
    </div>
  )
}
