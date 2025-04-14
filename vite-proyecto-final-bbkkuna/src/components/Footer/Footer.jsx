import './Footer.css'
import { FaGithub, FaInstagram, FaEnvelope, FaInfoCircle } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección de información */}
        <div className="footer-section">
          <h3>CheapGames Stores</h3>
          <p>
            Tu tienda favorita para encontrar las mejores ofertas en videojuegos 
            para PC, PlayStation, Xbox y Nintendo Switch.
          </p>
          
          <ul className="social-links">
            <li>
              <a href="https://github.com/anasaboumoussa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/offfx_anas" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        
        {/* Sección de enlaces rápidos */}
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul className="footer-links">
            <li>
              <a href="/" className="footer-link">Inicio</a>
            </li>
            <li>
              <a href="/games" className="footer-link">Juegos</a>
            </li>
            <li>
              <a href="/offers" className="footer-link">Ofertas</a>
            </li>
            <li>
              <a href="/platforms" className="footer-link">Plataformas</a>
            </li>
          </ul>
        </div>
        
        {/* Sección de contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="footer-links">
            <li>
              <a href="/about" className="footer-link">
                <FaInfoCircle style={{ marginRight: '8px' }} />
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="/contactar" className="footer-link">
                <FaEnvelope style={{ marginRight: '8px' }} />
                Contáctanos
              </a>
            </li>
            <li>
              <a href="/faq" className="footer-link">Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="/terms" className="footer-link">Términos y Condiciones</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CheapGames Stores. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer