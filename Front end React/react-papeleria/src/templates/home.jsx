import React, { useEffect, useState } from 'react';

const Home = () => {
  const [username, setUsername] = useState('none');
  const [uId, setUId] = useState('');

  useEffect(() => {
    // Obtener el nombre de usuario de localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Puedes obtener el uId de alguna manera, ya sea de localStorage o de otra fuente
    const storedUId = ''; // Agrega la lógica necesaria para obtener el uId
    setUId(storedUId);
  }, []);

  return (
    <div className="greetings">
      <h1>¡Bienvenido-<span>{username}</span>!</h1>
      <h1><span>{uId}</span></h1>
    </div>
  );
};

export default Home;
