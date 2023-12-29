import React from 'react'
import {useEffect , useState} from 'react'
import {getExistencias} from '../api/verExist.api'
import { Link } from 'react-router-dom';
import VerProductoId from '../api/verProductoId.api'
import { Icon } from '@iconify/react';
import {AgregarVentas,ActualizarExis} from '../api/Ventas.api'
export default function verExistencias() {
    const [existencias,setExist] =useState([]);
    const [venta,setVenta]=useState(false);
    const [menErrorVenta,setMenErrorVenta]=useState(false);
    const [existenciaVent,setExistenciaVen]=useState([]);
    const [cantidadVen,setCantidadVen]=useState(1);
    
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
            setExistenciaVen(res.data);
        }catch(error){
            console.log(error);}
        setVenta(true);
    }
    const CerrarVentana=()=>{
        setMenErrorVenta(false);
        setVenta(false);}

    useEffect(()=>{
        async function getExis(){
            const res= await getExistencias();
            setExist(res.data);
        }
        getExis();
    },[]);

  return( <div className='verExis'>
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
    </div>);
  
}
