import { useEffect, useState } from 'react';
import axios from 'axios';

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

  if (loading) return <div>Cargando juegos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Lista de juegos</h1>
      <ul>
        {games.map(game => (
          <li key={game.gameID}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
