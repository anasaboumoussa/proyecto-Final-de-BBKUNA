import React from 'react';
import './GameCard.css';

// Componente GameCard que muestra la información de un juego
// مكون GameCard الذي يعرض معلومات اللعبة
const GameCard = ({ game }) => {
  return (
    // Contenedor principal de la tarjeta de juego
    // الحاوية الرئيسية لبطاقة اللعبة
    <div className="game-card">
      {/* Contenedor para la imagen del juego con manejo de fallback */}
      {/* حاوية لصورة اللعبة مع إدارة البديل */}
      <div className="game-image-container">
        {game.thumb ? (
          // Si hay imagen disponible, mostrarla
          // إذا كانت هناك صورة متاحة، عرضها
          <img 
            src={game.thumb} 
            alt={`Portada de ${game.title}`} 
            className="game-image"
            // Manejador de error para la imagen
            // معالج الأخطاء للصورة
            onError={(e) => {
              e.target.onerror = null; // Previene bucles de error
              // يمنع الحلقات عند حدوث خطأ
              e.target.style.display = 'none'; // Oculta la imagen rota
              // يخفي الصورة المكسورة
              e.target.nextSibling.style.display = 'block'; // Muestra el fallback
              // يعرض البديل
            }}
          />
        ) : (
          // Si no hay imagen, mostrar icono por defecto
          // إذا لم تكن هناك صورة، عرض الأيقونة الافتراضية
          <div className="default-image-icon"></div>
        )}
        {/* Icono de imagen por defecto (siempre presente pero oculto inicialmente) */}
        {/* أيقونة الصورة الافتراضية (موجودة دائمًا ولكن مخفية مبدئيًا) */}
        <div className="default-image-icon" style={{ display: game.thumb ? 'none' : 'block' }}></div>
      </div>

      {/* Título del juego */}
      {/* عنوان اللعبة */}
      <h3>{game.title}</h3>
      
      {/* Precio en oferta */}
      {/* سعر العرض */}
      <p className='salePRICE'>Precio de oferta: {game.salePrice} USD</p>
      
      {/* Precio normal */}
      {/* السعر العادي */}
      <p className='normalPRICE'>Precio normal: {game.normalPrice} USD</p>
      
      {/* Mostrar porcentaje de ahorro solo si hay descuento */}
      {/* عرض نسبة التوفير فقط إذا كان هناك خصم */}
      {game.savings > 0 && (
        <p className='descuento'>Ahorras: {Math.round(game.savings)}%</p>
      )}
      
      {/* Enlace a la oferta (se abre en nueva pestaña con seguridad) */}
      {/* رابط العرض (يفتح في علامة تبويب جديدة مع الأمان) */}
      <a 
        href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`} 
        target="_blank" 
        rel="noopener noreferrer" // Seguridad para target="_blank"
        // الأمان عند استخدام target="_blank"
      >
        Ver oferta
        {/* شاهد العرض */}
      </a>
    </div>
  );
};

export default GameCard;
