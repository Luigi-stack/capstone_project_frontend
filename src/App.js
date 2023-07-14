import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Gallery from './components/Gallery';
import ContactUs from './components/Contact-us';
import Footer from './components/Footer';
import Basket from './components/Basket';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='shop' element={<Basket />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
