import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" exact element={<Hero/>}></Route>
    </Routes>
    <Menu/>
    <Footer/>
    </>
  );
}

export default App;
