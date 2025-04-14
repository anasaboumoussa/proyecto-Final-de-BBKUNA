







import React, { useEffect } from 'react';
import './terms.css';

const Terms = () => {
  useEffect(() => {
    document.title = "Términos y Condiciones - Mi Empresa";
  }, []);

  return (
    <div className="terms-container">
      <h1 className="terms-title">Términos y Condiciones de Uso</h1>
      <p className="terms-updated">Última actualización: {new Date().toLocaleDateString()}</p>
      
       
      <h1 className="terms-title">Términos y Condiciones de Uso</h1>
      <p className="terms-updated">Última actualización: {new Date().toLocaleDateString()}</p>
      
      <section className="terms-section">
        <h2 className="terms-section-title">1. Uso del Sitio</h2>
        <p>Bienvenido/a a Mi Empresa. Al acceder y utilizar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones.</p>
        <ul className="terms-list">
          <li>No utilizar el sitio para fines ilegales o no autorizados</li>
          <li>No interferir con la seguridad o el funcionamiento del sitio</li>
          <li>No realizar actividades que puedan dañar nuestra infraestructura</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2 className="terms-section-title">2. Propiedad Intelectual</h2>
        <p>Todos los contenidos del sitio son propiedad de Mi Empresa o de sus licenciantes.</p>
      </section>

      <section className="terms-section">
        <h2 className="terms-section-title">3. Limitación de Responsabilidad</h2>
        <p>Mi Empresa no será responsable por daños resultantes del uso de este sitio web.</p>
      </section>

      <section className="terms-section">
        <h2 className="terms-section-title">4. Privacidad</h2>
        <p>Nuestras prácticas de privacidad se describen en nuestra <a href="/politica-privacidad" className="terms-link">Política de Privacidad</a>.</p>
      </section>

      <section className="terms-section">
        <h2 className="terms-section-title">5. Modificaciones</h2>
        <p>Nos reservamos el derecho de modificar estos términos en cualquier momento.</p>
      </section>

      <section className="terms-section">
        <h2 className="terms-section-title">6. Ley Aplicable</h2>
        <p>Estos términos se regirán de acuerdo con las leyes de tu país/estado.</p>
      </section>

      <footer className="terms-footer">
        <p>© {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
        <p>Contacto: <a href="mailto:contacto@miempresa.com" className="terms-link">contacto@miempresa.com</a></p>
      </footer>
    </div>
  );
};

export default Terms;
