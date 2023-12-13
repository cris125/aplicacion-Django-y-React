import React from 'react'
import {useEffect , useState} from 'react'
import {getExistencias} from '../api/verExist.api'


export default function verExistencias() {
    const [existencias,setExist] =useState([]);

    useEffect(()=>{
        async function getExis(){
            const res= await getExistencias();
            setExist(res.data);
        }
        getExis();
    },[]);
  return( <div>
      {existencias.map(exi =>(
        <div key={exi.id} className='Exis'>
            <h1>{exi.name}</h1>
            <h1>{exi.photo}</h1>
            <img src={`http://127.0.0.1:8000${exi.photo}`} alt={exi.name} />
        </div>
      ))}
    </div>);
  
}
