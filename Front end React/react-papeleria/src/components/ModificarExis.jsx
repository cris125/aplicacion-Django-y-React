import React from 'react'
import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import VerProductoId from '../api/verProductoId.api.js';
import { Link } from 'react-router-dom';
export default function ModificarExis() {
    const { id } = useParams();
    const [existencia,setExist] =useState([]);

    useEffect(()=>{
        async function getExis(){
            const res = await VerProductoId(id);
            console.log(res);
            setExist(res.data);
        }
        getExis();
    },[]);
    
    /*<div  className='Exis'>
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
                    <Link className='link' to={`/home/VenderExis/${exi.id}`}>Vender</Link>
                    <Link className='link' to={`/home/ModificarExis/${exi.id}`}>Modificar</Link>
                </div>

            </div>
            
            
        </div>*/

  return (
    
    <div>
        <div className='verExis'>
        <div  className='Exis'>
            <img src={`http://127.0.0.1:8000${existencia.photo}`} alt={existencia.name} />
            <div className='datelles'>
                <h1>Nombre: {existencia.name}</h1>
                <h1>Valor: ${existencia.value-0}</h1>  
                <h1>Existencias: {existencia.existences-0}</h1>
                <div className='contDesc'>
                    <h1>Description..</h1>
                    <h1 className='h1Desc'>{existencia.description}</h1> 
                </div>

                <div className='contenedorlinks'>
                    <Link className='link' to={`/home/VenderExis/${existencia.id}`}>Vender</Link>
                    <Link className='link' to={`/home/ModificarExis/${existencia.id}`}>Modificar</Link>
                </div>
            </div>
            
            
        </div>
        </div>
      <h1>hashdhshdas</h1>
    </div>
  )
}
