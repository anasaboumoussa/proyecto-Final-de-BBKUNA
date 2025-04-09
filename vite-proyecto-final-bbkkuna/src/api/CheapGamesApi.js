import axios from 'axios';

// Crear una instancia de Axios con la URL base
const cheapSharkApi = axios.create({
  baseURL: 'https://www.cheapshark.com/api/1.0/',
});

// Función para obtener juegos por título
export const getGamesByTitle = async (title) => {
  try {
    const response = await cheapSharkApi.get(`/games?title=${title}`);
    return response.data; // Devolver los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener los juegos", error);
    return [];
  }
};
