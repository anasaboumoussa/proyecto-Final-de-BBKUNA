import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CheapGames Stores</h3>
          <p>Encuentra las mejores ofertas en videojuegos</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul className="social-links">

            <li>
              <a href="https://github.com/anasaboumoussa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                 <i className="fa-brands fa-github social-icon"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/offfx_anas" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                 <i className="fa-brands fa-instagram social-icon"></i>
              </a>
            </li>
          </ul>


        </div>
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} CheapGames </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer