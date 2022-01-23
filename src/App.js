// Imports
import { Routes, Route, } from 'react-router-dom';
// Components
import Footer from './components/Footer';
import Nav from './components/Nav';
// Pages
import Home from './pages/Home';
import SWApi from './pages/SWApi';
// CSS
import './App.css';


function App() {
  return (
    <div className="App">

      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />       
        <Route path='swapi' element={<SWApi />} />            
               
      </Routes>
      
      <Footer />

      {/* Only need to use outlet if you have nested Route */}
      {/* <Outlet /> */}


    
    </div>
  );
}

export default App;



