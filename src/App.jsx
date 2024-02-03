import {Routes, Route, BrowserRouter} from 'react-router-dom';


import Home from './pages/home/Home';
import About from './pages/about/About';
import Portifolio from './pages/portifolio/Portifolio';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Members from './pages/members/Members';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App