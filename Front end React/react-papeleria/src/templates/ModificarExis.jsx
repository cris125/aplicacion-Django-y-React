import React from 'react'
import {useEffect , useState} from 'react'
import { useParams,Navigate } from 'react-router-dom';
import VerProductoId from '../api/verProductoId.api.js';
import { Link } from 'react-router-dom';
import EliminarPuducto from '../api/elimProducto.jsx';
import ModificarProducto from '../api/modificarProduc.api.js'
export default function ModificarExis() {
    const [name, setName] = useState('');
    const [value, setValue] = useState(0);
    const [existences, setExistences] = useState(0);
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [mensage,setMensage]=useState(false);

    const { id } = useParams();
    const [existencia,setExist] =useState([]);

    useEffect(()=>{
        async function getExis(){
            const res = await VerProductoId(id);
            setExist(res.data);
        }
        getExis();
    },[]);
    const EliProdruc=async()=>{
        try{
            await EliminarPuducto(id);
            alert("Producto Eliminado Con Exito");
           }
        catch(error){
            console.log(error);
            }
    }
    const handleExis = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (name !=''){
            formData.append('name', name);
            console.log("name");}
        if (value !=0){
            formData.append('value', value);
            console.log("value");}
        if (existences !=0){
            formData.append('existences', value);
            console.log("existences");}
        if(description!=''){
            formData.append('description', description);
            console.log("description");}
        
        if(photo!=null ||photo!=undefined ){
            formData.append('photo', photo)
            console.log("photo");
        }
        try{
            await ModificarProducto(id,formData);
            window.location.reload();
        }catch(error){
            console.error('Error al modificar existencia:', error); 
        }
        

    }
   

  return (
    
    <div className='modExis-verExis'>
        <div className='verExis'>
        <div className='conth1producto-link'>
            <h1 className='h1producto'>Producto</h1>
            <button className='link' onClick={EliProdruc}>Eliminar Producto</button>
            
        </div>
        
        <div  className='Exis'>
            <img className='Img' src={`http://127.0.0.1:8000${existencia.photo}`} alt={existencia.name} />
            <div className='datelles'>
                <h1>Nombre: {existencia.name}</h1>
                <h1>Valor: ${existencia.value-0}</h1>  
                <h1>Existencias: {existencia.existences-0}</h1>
                <div className='contDesc'>
                    <h1>Description..</h1>
                    <h1 className='h1Desc'>{existencia.description}</h1> 
                </div>

            </div>
            
            
        </div>
        </div>
        <div className='modExis'>
            
    <div className='contFormModExis'>
      <h1>Modificar Producto</h1>
      
      <form onSubmit={handleExis} className='formModif'>
      <div className='label-imput'>
          <label htmlFor="">Nombre  del producto</label>
          <input type="text" id='name' placeholder='nombre'
          value={name}
          onChange={(e) => setName(e.target.value)}
          
          />
      </div>
        
      <div className='label-imput'>
          <label htmlFor="">Valor del producto</label>
        <input type="number" 
          id='value' 
          placeholder='valor'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
        
      <div className='label-imput'>
          <label htmlFor="">Existencias del producto</label>
        <input type="number" 
          id='existences' 
          placeholder='Existencias'
          value={existences}
          onChange={(e) => setExistences(e.target.value)}
        />
      </div>
        
      <div className='label-imput'>
          <label htmlFor="">Descripción del producto</label>
        <textarea 
          id='description' rows="3" 
          placeholder='descripcion'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
        

      <div className='label-imput'>
          <label>Foto del producto</label>
          
          <input type="file" 
            id='photo'
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
        
          />
      </div>
        <input className='Submit' type='submit' value='Modificar Producto' />

      </form>
      </div>

    </div>
       
    </div>
  )
}
