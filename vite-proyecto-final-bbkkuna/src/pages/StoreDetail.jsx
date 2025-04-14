import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const StoreDetail = () => {
  // Obtener el parámetro 'storeId' de la URL
  const { storeId } = useParams()

  // Definir el estado para los datos de la tienda, el estado de carga y los posibles errores
  const [store, setStore] = useState(null)  // Aquí almacenamos los datos de la tienda
  const [loading, setLoading] = useState(true)  // Estado de carga inicializado en 'true'
  const [error, setError] = useState(null)  // Estado de error inicializado en 'null'

  // Hook useEffect para realizar la solicitud HTTP cuando el componente se monta o el storeId cambia
  useEffect(() => {
    // Función asincrónica para obtener los datos de la tienda
    const fetchStore = async () => {
      try {
        // Realizamos la solicitud GET para obtener todas las tiendas desde la API
        const response = await axios.get('https://www.cheapshark.com/api/1.0/stores')
        
        // Buscamos la tienda cuyo storeID coincida con el storeId de la URL
        const foundStore = response.data.find(s => s.storeID === storeId)
        
        // Si encontramos la tienda, la guardamos en el estado 'store'
        if (foundStore) {
          setStore(foundStore)
        } else {
          // Si no encontramos la tienda, mostramos un mensaje de error
          setError('Tienda no encontrada')
        }
      } catch (err) {
        // Si ocurre un error durante la solicitud, lo capturamos y lo guardamos en el estado 'error'
        setError(err.message)
      } finally {
        // En cualquier caso, cambiamos el estado de 'loading' a 'false' una vez que la solicitud ha terminado
        setLoading(false)
      }
    }

    // Llamamos a la función fetchStore para hacer la solicitud
    fetchStore()
  }, [storeId])  // Dependencia: el efecto se ejecutará cada vez que cambie el 'storeId'

  // Si la página está cargando, mostramos un mensaje de "Cargando..."
  if (loading) return <div>Cargando...</div>

  // Si hay un error, mostramos el mensaje de error
  if (error) return <div>Error: {error}</div>

  // Si no encontramos la tienda, mostramos un mensaje de "Tienda no encontrada"
  if (!store) return <div>Tienda no encontrada</div>

  // Una vez que tenemos los datos de la tienda, renderizamos los detalles de la tienda
  return (
    <div className="store-detail">
      {/* Mostramos la imagen del banner de la tienda */}
      <img 
        src={`https://www.cheapshark.com${store.images.banner}`} 
        alt={`Banner de ${store.storeName}`} 
      />
      {/* Mostramos el nombre de la tienda */}
      <h1>{store.storeName}</h1>
      {/* Mostramos el ID de la tienda */}
      <p>ID: {store.storeID}</p>
      {/* Mostramos si la tienda está activa o no */}
      <p>Activo: {store.isActive ? 'Sí' : 'No'}</p>
      <button onClick={() => window.history.back()}  className='button-back'>volver atras </button>
    </div>
  )
}

export default StoreDetail
