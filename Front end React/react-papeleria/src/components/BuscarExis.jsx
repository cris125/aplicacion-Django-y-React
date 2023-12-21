import React from 'react'
import { Icon } from '@iconify/react';
import {  Link } from 'react-router-dom';
import {useEffect , useState} from 'react'
import {getExistencias} from '../api/verExist.api'

export default function BuscarExis() {
  const [existencias,setExist] =useState([]);
  const [BusExis,setBus]=useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setBus('');
    getExis(BusExis);
  };
  async function getExis(Busq){
    let a=[];
    const res= await getExistencias();
    for(let i=0;i<(res.data).length;i++){
      if(res.data[i].description.includes(Busq)){
        
        const s={id:res.data[i].id ,
                description:res.data[i].description,
                name:res.data[i].name,
                photo:res.data[i].photo,
                value:res.data[i].value}
        a.push(s);
      }  
    }  
    alert(a);
    if(!a){
      alert("no se encontro el producto");
    }else{
      setExist(a);
    }
    
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
      {BusExis ? <></>:<h1 className='h1home'>Productos Buscados</h1>}
     <div className='verExis'>
     {existencias.map(exi =>(
        
        <div key={exi.id} className='Exis'>
            <h1>Nombre: {exi.name}</h1>
            <h1>Descripcion: {exi.description}</h1> 
            <h1>Valor: ${exi.value-0}</h1>  
            <h1>Existencias: {exi.existences-0}</h1>  
            <img src={`http://127.0.0.1:8000${exi.photo}`} alt={exi.name} />
            <div className='contenedorlinks'>
                <Link className='link' to={`/home/vender/${exi.id}`}>Vender</Link>
                <Link className='link' to={`/home/modificar/${exi.id}`}>Modificar</Link>
            </div>
        </div>
      ))}
     </div>
     
    </div>
  )
}
