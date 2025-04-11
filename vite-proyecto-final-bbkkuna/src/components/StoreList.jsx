import { useEffect, useState } from 'react';
import axios from 'axios';
import StoreCard from './StoreCard';  // Importa el componente StoreCard para renderizar cada tienda
import './StoreList.css';  // Asegúrate de importar los estilos CSS para el componente

const StoreList = () => {
  // Definir el estado para almacenar la lista de tiendas, el estado de carga y posibles errores
  const [stores, setStores] = useState([]);  // Lista de tiendas, inicialmente vacía
  const [loading, setLoading] = useState(true);  // Estado de carga inicializado en 'true'
  const [error, setError] = useState(null);  // Estado de error inicializado en 'null'

  // useEffect se ejecuta al montar el componente o cuando el componente se actualiza
  useEffect(() => {
    // Función asincrónica para obtener la lista de tiendas desde la API
    const fetchStores = async () => {
      try {
        // Realizamos una solicitud GET para obtener las tiendas desde la API
        const response = await axios.get('https://www.cheapshark.com/api/1.0/stores');
        
        // Si la solicitud es exitosa, se guarda la lista de tiendas en el estado 'stores'
        setStores(response.data);
      } catch (err) {
        // Si ocurre un error, se guarda el mensaje de error en el estado 'error'
        setError(err.message);
      } finally {
        // Cuando la solicitud ha terminado (ya sea exitosa o con error), cambiamos 'loading' a false
        setLoading(false);
      }
    };

    // Llamamos a la función para obtener las tiendas
    fetchStores();
  }, []);  // El arreglo vacío [] como dependencia significa que solo se ejecutará una vez, al montar el componente

  // Si el componente aún está cargando, mostramos un mensaje de carga con una animación
  if (loading) return (
    <div className="loading-message">
      <div className="loading-animation">🌀</div>
      <span>Cargando tiendas...</span>
    </div>
  );
  
  // Si ocurre un error durante la solicitud, mostramos el mensaje de error
  if (error) return <div className="error-message">Error: {error}</div>;

  // Si la solicitud es exitosa, renderizamos la lista de tiendas
  return (
    <div className="store-list">
      <h2>Tiendas Disponibles</h2>
      <div className="stores">
        {/* Mapeamos cada tienda y pasamos los datos a StoreCard para ser renderizados */}
        {stores.map(store => (
          <div className="store-card-container" key={store.storeID}>
            <StoreCard store={store} />  {/* Pasamos los datos de cada tienda a StoreCard */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
