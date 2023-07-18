import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home.js';
import Menu from './pages/Menu.js';
import Contact from './pages/Contact.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route index path='/menu' element={<Menu/>}/>
          <Route index path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
