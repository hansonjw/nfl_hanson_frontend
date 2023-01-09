
import React from 'react';
import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// for SASS and customizing bootstrap
import './assets/scss/main.scss'

import ScoreBoard from './pages/ScoreBoard';
import Home from './pages/Home'


function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/scoreboard" element={<ScoreBoard />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
