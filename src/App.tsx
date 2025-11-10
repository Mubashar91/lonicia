import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import ServicesDetails from './pages/ServicesDetails';
import GalleryView from './pages/GalleryView';
import PriceList from './pages/PriceList';
import Shops from './pages/Shops';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/manicure" element={<ServicesDetails />} />
            <Route path="/services/pedicure" element={<ServicesDetails />} />
            <Route path="/services/lash-extensions" element={<ServicesDetails />} />
            <Route path="/services/laser-hair-removal" element={<ServicesDetails />} />
            <Route path="/services-details" element={<ServicesDetails />} />
            <Route path="/gallery" element={<GalleryView />} />
            <Route path="/price-list" element={<PriceList />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

