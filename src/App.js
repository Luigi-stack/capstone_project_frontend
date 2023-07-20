import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Gallery from './components/Gallery';
import ContactUs from './components/Contact-us';
import Footer from './components/Footer';
import Basket from './components/Basket';
import LoginRegister from './components/LoginRegister';


// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <NavBar />
//         <Routes>
//           <Route path='homepage' element={<Homepage />} />
//           <Route path='gallery' element={<Gallery />} />
//           <Route path='contact-us' element={<ContactUs />} />
//           <Route path='shop' element={<Basket />} />
//           <Route path='/' element={<LoginRegister />} />
//         </Routes>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginRegister />} />
          <Route path='homepage' 
          element={
              <>
                <NavBar />
                <Homepage />
                <Footer />
              </>
            }
          />
          <Route path='gallery'
            element={
              <>
                <NavBar />
                <Gallery />
                <Footer />
              </>
            }
          />
          <Route path='contact-us'
            element={
              <>
                <NavBar />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route path='shop'
            element={
              <>
                <NavBar />
                <Basket />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
