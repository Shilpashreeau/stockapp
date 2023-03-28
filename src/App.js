
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Stock from './components/Stock';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/stocks/:symbol' element={<Stock />} />
        <Route path='/stocks' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
