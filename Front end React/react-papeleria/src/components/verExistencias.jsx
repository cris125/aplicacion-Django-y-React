import React from 'react'
import {useEffect , useState} from 'react'
import {getExistencias} from '../api/verExist.api'
import { Link } from 'react-router-dom';

export default function verExistencias() {
    const [existencias,setExist] =useState([]);

    useEffect(()=>{
        async function getExis(){
            const res= await getExistencias();
            setExist(res.data);
            
        }
        getExis();
    },[]);
  return( <div className='verExis'>
    
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
    </div>);
  
}
