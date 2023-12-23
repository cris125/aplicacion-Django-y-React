import axios from 'axios'

export const AgreExis = async (formData) => {
  return await axios.post('http://127.0.0.1:8000/registro/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};