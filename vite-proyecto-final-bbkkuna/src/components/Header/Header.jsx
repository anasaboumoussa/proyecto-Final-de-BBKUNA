import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={() => setMenuActive(false)}>
          <div className="game-icon">
            <div className="game-button">🎮</div>
          </div>
          <h1>CheapGames</h1>
        </Link>

        {/* Barra de búsqueda simplificada (solo input) */}
        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar juegos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        {/* Menú hamburguesa para móvil */}
        <button 
          className={`menu-toggle ${menuActive ? 'active' : ''}`}
          onClick={() => setMenuActive(!menuActive)}
          aria-label="Menú"
        >
          ☰
        </button>

        {/* Navegación */}
        <nav className={`nav ${menuActive ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" onClick={() => setMenuActive(false)}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/stores" onClick={() => setMenuActive(false)}>Tiendas</Link>
            </li>
            <li className="nav-item">
              <Link to="/games" onClick={() => setMenuActive(false)}>Juegos</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={() => setMenuActive(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" onClick={() => setMenuActive(false)}> Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;