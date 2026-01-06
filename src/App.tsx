import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import OurWork from './pages/OurWork';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-vic-dark">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;