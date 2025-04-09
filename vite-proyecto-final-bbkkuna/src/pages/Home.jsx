import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Descubre las mejores ofertas en videojuegos</h1>
          <p>Compara precios entre todas las tiendas digitales</p>
          <Link to="/stores" className="cta-button">Explorar Tiendas</Link>
        </div>
      </section>
      
      <section className="features">
        <h2>¿Por qué usar CheapGames?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Compara precios</h3>
            <p>Encuentra el mejor precio para tus juegos favoritos.</p>
          </div>
          <div className="feature-card">
            <h3>+50 Tiendas</h3>
            <p>Todas las principales tiendas digitales en un solo lugar.</p>
          </div>
          <div className="feature-card">
            <h3>Actualizaciones diarias</h3>
            <p>Las ofertas se actualizan constantemente.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home