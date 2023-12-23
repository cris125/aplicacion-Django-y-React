import React from 'react'
import { Icon } from '@iconify/react';
import {  Link } from 'react-router-dom';
import {useEffect , useState} from 'react'
import {getExistencias} from '../api/verExist.api'

export default function BuscarExis() {
  const [existencias,setExist] =useState([]);
  const [BusExis,setBus]=useState([]);
  const [add,setadd]=useState("");

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
      setadd("Productos Encontrados");
      setExist(a);}
    
}

  return (
    <div >
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
                    <Link className='link' to={`/home/vender/${exi.id}`}>Vender</Link>
                    <Link className='link' to={`/home/modificar/${exi.id}`}>Modificar</Link>
                </div>

            </div>
            
            
        </div>
      ))}
    </div>
    </div>}
      
     
    </div>
  )
}
