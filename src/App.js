
import React from 'react';
import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// for SASS and customizing bootstrap
import './assets/scss/main.scss'

// Components
import ScoreBoard from './pages/ScoreBoard';
import Home from './pages/Home'
import ErrorURL from './pages/ErrorURL'
import Brackets from './pages/Brackets'
import NavBar from './pages/components/NavBar'


class App extends React.Component{
  constructor(props) {
      super(props);
  };

  render(){
    return (
      <div>
        <BrowserRouter>
          <NavBar/>
          <div class="py-5">
            <Routes>
              <Route exact path="/" element={<Home />} errorElement={<ErrorURL />}/>
              <Route exact path="scoreboard" element={<ScoreBoard />} />
              <Route exact path="brackets" element={<Brackets />} />
              <Route path="*" element={<ErrorURL />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;