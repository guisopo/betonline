import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Game } from "./pages/Game";
import { Home } from "./pages/Home";
import './styles/main.scss'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
