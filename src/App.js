import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Login/>} />
      <Route path="*" element={<PublicRoutes/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
