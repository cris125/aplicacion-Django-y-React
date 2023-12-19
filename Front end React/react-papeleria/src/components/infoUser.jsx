import React, { useEffect, useState } from 'react';
import {infoUser} from '../api/infoUser.api'
import imgUser from '../assets/imgUser.png'
const InfoUser = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getInfo(){
      const res= await infoUser();
      setUserData(res.data);
    }
    getInfo();
  }, []); 

  return (
    <div>
      {userData ? (
        <div>
          <h1>Hola {userData.name} </h1>
          <img src={imgUser}></img>
          <p>Nombre: {userData.name}</p>
          <p>Email: {userData.email}</p>

          {/* Agrega más información según la estructura de los datos del usuario */}
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
};

export default InfoUser;