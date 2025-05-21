// frontend/src/App.tsx
import './styles/index.css';
import React from "react";
import { Routes, Route,  } from "react-router-dom";
import Login from "./pages/Login";
import Welcome from './pages/welcome';
import Register from './pages/Register';
import Account from './pages/Account';

const App: React.FC = () => {
  return (
    <Routes>
       <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
 </Routes>

  );
};

export default App;
