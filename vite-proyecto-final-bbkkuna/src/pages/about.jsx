import React from 'react';
import { FaGamepad, FaUsers, FaDollarSign, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>Sobre <span>CheapGames</span></h1>
          <p>Tu destino para encontrar las mejores ofertas en videojuegos</p>
          <i class="fa-brands fa-brandss fa-playstation"></i>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <h2>Nuestra Misión</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <FaGamepad className="mission-icon" />
              <h3>Juegos Accesibles</h3>
              <p>Queremos que todos puedan disfrutar de sus juegos favoritos sin gastar de más.</p>
            </div>
            <div className="mission-card">
              <FaDollarSign className="mission-icon" />
              <h3>Ahorro Garantizado</h3>
              <p>Compara precios entre múltiples tiendas para encontrar el mejor deal.</p>
            </div>
            <div className="mission-card">
              <FaUsers className="mission-icon" />
              <h3>Comunidad Gamer</h3>
              <p>Creado por gamers, para gamers. Entendemos lo que buscas.</p>
            </div>
            <div className="mission-card">
              <FaHeart className="mission-icon" />
              <h3>Hecho con Pasión</h3>
              <p>Nuestro equipo trabaja con amor por los videojuegos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
      
      <div className="team-card">
  <div className="team-avatar alex-avatar"></div>
  <h3>Anas Aboumoussa</h3>
  <p>Fundador & CEO</p>
  <p className="team-bio">Gamer desde los 5 años, soñaba con crear una plataforma que ayudara a otros jugadores.</p>
</div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>¿Listo para encontrar tus próximos juegos?</h2>
          <a href="/" className="cta-button">Explorar Ofertas</a>
        </div>
      </section>
    </div>
  );
};

export default About;