import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Contactar from './pages/Contactar';
import Stores from './pages/Stores';
import StoreDetail from './pages/StoreDetail';
import GameList from "./pages/GameList";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import About from './pages/about';
import SearchPage from './pages/SearchPage';
import Login from './pages/Login';
import Registrarme from './pages/Registrarme';
import './App.css';
import BackToTop  from './components/BackToTopButton';
function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div>

          <BackToTop /> 

        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/register" element={<Registrarme />} />
          <Route path="/contactar" element={<Contactar />} />
          <Route path="/stores/:storeId" element={<StoreDetail />} />
          <Route path="/games" element={<GameList />} /> {/* Nueva ruta para juegos */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;