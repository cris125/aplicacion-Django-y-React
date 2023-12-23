import React, { useState } from 'react';

const ImageUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Por favor, selecciona un archivo');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      // Aquí puedes hacer la solicitud POST a tu servidor
      const response = await fetch('URL_DEL_SERVIDOR', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Imagen subida exitosamente');
        // Realiza cualquier otra acción después de la carga exitosa
      } else {
        alert('Error al subir la imagen');
      }
    } catch (error) {
      console.error('Error en la carga de la imagen:', error);
    }
  };

  return (
    <div>
      <h2>Subir Imagen</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Selecciona una imagen:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit">Subir</button>
      </form>
    </div>
  );
};

export default ImageUploadForm;
