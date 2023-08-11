import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/register';
import Login from './Components/login';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
