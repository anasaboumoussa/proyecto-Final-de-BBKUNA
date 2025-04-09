import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchPage.css';

const SearchPage = () => {
  // Obtiene la ubicación actual para acceder a los query params
  const location = useLocation();
  
  // Extrae el parámetro de búsqueda 'q' de la URL y lo convierte a minúsculas
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';
  
  // Estado para almacenar los juegos encontrados
  const [games, setGames] = useState([]);
  
  // Estado para manejar el estado de carga
  const [loading, setLoading] = useState(true);

  // Efecto que se ejecuta cuando cambia la query
  useEffect(() => {
    const fetchGames = async () => {
      try {
        let apiResponse;
        
        if (query) {
          // Si hay una query de búsqueda:
          // 1. Busca juegos por título
          const searchResponse = await axios.get(
            `https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(query)}`
          );
          
          // 2. Para cada juego encontrado, obtiene sus deals (ofertas)
          const dealRequests = searchResponse.data.map(game => 
            axios.get(`https://www.cheapshark.com/api/1.0/deals?gameID=${game.gameID}`)
          );
          
          // 3. Espera todas las peticiones de deals
          const dealResponses = await Promise.all(dealRequests);
          
          // 4. Combina todos los resultados en un solo array
          apiResponse = dealResponses.flatMap(response => response.data);
        } else {
          // Si no hay query, muestra ofertas destacadas
          const response = await axios.get(
            'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50'
          );
          apiResponse = response.data;
        }
        
        // Actualiza el estado con los juegos/deals obtenidos
        setGames(apiResponse);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        // Finaliza el estado de carga
        setLoading(false);
      }
    };

    fetchGames();
  }, [query]); // Se ejecuta cada vez que cambia la query

  // Muestra un indicador de carga mientras se obtienen los datos
  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <div className="search-results">
      {/* Título condicional basado en si hay query o no */}
      <h2>{query ? `Resultados para: "${query}"` : 'Ofertas destacadas'}</h2>
      
      {/* Renderizado condicional basado en si hay resultados */}
      {games.length > 0 ? (
        <div className="games-grid">
          {/* Mapea cada juego a una tarjeta de juego */}
          {games.map(game => (
            <div key={game.dealID || game.gameID} className="game-card">
              {/* Contenedor de imagen con fallback */}
              <div className="game-image-container">
                {game.thumb ? (
                  <img 
                    src={game.thumb} 
                    alt={game.title} 
                    className="game-image"
                  />
                ) : (
                  <div className="default-image-icon"></div>
                )}
              </div>

              {/* Información del juego */}
              <h3>{game.title}</h3>
              <p className='salePRICE'>Precio de oferta: {game.salePrice} USD</p>
              <p className='normalPRICE'>Precio normal: {game.normalPrice} USD</p>
              
              {/* Muestra el ahorro solo si hay descuento */}
              {game.savings > 0 && (
                <p className='descuento'>Ahorras: {Math.round(game.savings)}%</p>
              )}
              
              {/* Enlace a la oferta externa */}
              <a 
                href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="offer-link"
              >
                Ver oferta
              </a>
            </div>
          ))}
        </div>
      ) : (
        // Mensaje cuando no hay resultados
        <p className="no-results">No se encontraron resultados</p>
      )}
    </div>
  );
};

export default SearchPage;