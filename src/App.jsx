import {BrouserRouter, Routes, Route, BrowserRouter} from 'react-router-dom';


import Home from './pages/home/Home';
import About from './pages/about/About';
import Portifolio from './pages/portifolio/Portifolio';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Portifolio/>
      <Contact/>
      <NotFound/>
     

    </BrowserRouter>
  )
}

export default App