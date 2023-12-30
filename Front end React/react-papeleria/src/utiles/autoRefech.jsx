import React, { useEffect } from 'react';

const AutoRefresh = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Recargar la página
      window.location.reload();
    }, 250000); // 300,000 milisegundos = 5 minutos

    return () => clearInterval(intervalId);
  }, []); 

};

export default AutoRefresh;