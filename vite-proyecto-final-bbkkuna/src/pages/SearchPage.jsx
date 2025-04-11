import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchPage.css';

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      if (!query) {
        setGames([]);
        return;
      }

      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get(
          `https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(query)}&limit=20`
        );
        
        // Verificar si hay resultados
        if (response.data && response.data.length > 0) {
          setGames(response.data);
        } else {
          setGames([]);
          setError(`No se encontraron resultados para "${query}"`);
        }
      } catch (err) {
        console.error("Error fetching games:", err);
        setError("Error al cargar los resultados. Intenta nuevamente.");
        setGames([]);
      } finally {
        setLoading(false);
      }
    };

    // Pequeño delay para evitar búsquedas rápidas consecutivas
    const timer = setTimeout(() => {
      fetchGames();
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="search-page">
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Buscando juegos...</p>
        </div>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
        </div>
      ) : (
        <div className="games-results">
          {query && <h2 className="results-title">Resultados para: <span>"{query}"</span></h2>}
          
          <div className="games-grid">
            {games.map((game) => (
              <div key={game.gameID} className="game-card">
                <div className="game-image-container">
                  <img 
                    src={game.thumb} 
                    alt={game.external} 
                    className="game-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder-game.jpg';
                    }}
                  />
                </div>
                <div className="game-info">
                  <h3 className="game-title">{game.external}</h3>
                  <div className="game-pricing">
                    <span className="game-price">${game.cheapest}</span>
                    {game.cheapest !== game.retailPrice && (
                      <span className="game-retail-price">${game.retailPrice}</span>
                    )}
                  </div>
                  <a 
                    href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealID}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="deal-button"
                  >
                    Ver Oferta
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;