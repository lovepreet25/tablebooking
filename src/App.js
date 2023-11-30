import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import BookingAlert from './Pages/BookingAlert';
import { Routes,Route } from 'react-router-dom';
import Reservation from './Pages/Reservation';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" exact element={<Home />}></Route>
      <Route path="/reservation" element={<Reservation />}></Route> 
      <Route path="/confirmed" element={<BookingAlert/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
