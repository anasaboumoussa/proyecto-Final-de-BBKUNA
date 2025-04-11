import { useEffect, useState } from 'react';
import axios from 'axios';
import { ImPointRight } from 'react-icons/im';
import './GameList.css'; // o el nuevo archivo CSS que creaste

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15');
        setGames(response.data);
      } catch (err) {
        if (err.response && err.response.status === 429) {
          setError('Demasiadas solicitudes. Intenta de nuevo más tarde.');
        } else {
          setError('Error al cargar los juegos.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <div className="loading">Cargando juegos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="game-list-container">
      <h1>Lista de Juegos</h1>
      <ul className="game-list">
        {games.map((game) => (
          <li key={game.gameID} className="game-item">
            <img src={game.thumb} alt={game.title} />
            <div className="game-content">
              <h2>{game.title}</h2>
              <p className="price">
                <ImPointRight className="price-icon" />
                Comprar por: ${game.normalPrice}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;