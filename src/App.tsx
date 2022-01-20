import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import { Currencies } from './components/Currencies/Currencies';
import { Gold } from './components/Gold/Gold';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Currencies />} />
        <Route path="/gold" element={<Gold />} />
        <Route path="*" element={<Currencies />} />
      </Routes>
    </div>
  );
}

export default App;
