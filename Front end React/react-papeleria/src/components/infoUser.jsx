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
        <div className='infoUser'>
          <p>{userData.email}</p>
          <h2>¡Hola, {userData.name}!</h2>
          <img src={imgUser}></img>
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
};

export default InfoUser;