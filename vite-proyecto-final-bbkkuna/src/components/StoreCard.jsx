import { Link } from 'react-router-dom';
import './StoreCard.css';

const StoreCard = ({ store }) => {
  return (
    <div className="store-card">
      <span className="store-id-badge">ID: {store.storeID}</span>
      <img 
        src={`https://www.cheapshark.com${store.images.logo}`} 
        alt={store.storeName}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/150x75?text=Store+Logo';
          e.target.style.objectFit = 'cover';
        }}
      />
      <div className="store-card-content">
        <h3>{store.storeName}</h3>
        <Link to={`/stores/${store.storeID}`}>Ver ofertas</Link>
      </div>
    </div>
  )
}

export default StoreCard;