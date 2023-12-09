import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero'
import Find from './components/find/Find';
import Driver from './components/driver/Driver';
import Luxury from './components/luxury/Luxury';
import Footer from './components/footer/Footer';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
     <Hero/>
     <Find/>
     <Driver/>
     <Luxury/>
     <Footer/>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
