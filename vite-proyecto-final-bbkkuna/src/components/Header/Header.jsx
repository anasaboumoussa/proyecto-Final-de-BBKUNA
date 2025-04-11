import { useState, useEffect } from 'react';
import { Link, useNavigate, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  // Sincroniza el input con el valor de la URL (por si recargas o usas el botón atrás)
  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    setSearchQuery(query || '');
  }, [location]);

  // Detecta si el input está vacío y redirige
  useEffect(() => {
    if (searchQuery.trim() === '' && location.pathname === '/search') {
      navigate('/games'); // o '/' si prefieres volver al inicio
    }
  }, [searchQuery, location, navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="game-icon">
            <div className="game-button">🎮</div>
          </div>
          <h1>CheapGames</h1>
        </Link>

        <div className="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar juegos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar juegos"
            />
     
          </form>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/stores" className={({ isActive }) => isActive ? 'active' : ''}>
                Tiendas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/games" className={({ isActive }) => isActive ? 'active' : ''}>
                Juegos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                About
              </NavLink>
            </li>
            <li className="nav-item login-item">
              <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
