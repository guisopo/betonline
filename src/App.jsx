import * as React from 'react'
import './styles/main.scss'
import { Game } from './pages/Game'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'

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

export default App
