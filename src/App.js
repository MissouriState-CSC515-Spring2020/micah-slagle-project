import React from 'react';
import './App.css';
import SportingKC from './components/Cmp';
import Mlbstadiums from './components/Mlb';
import Navbar from './components/Navbar';
import Homepage from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Homepage} />
        <Route path='/Mlb' component={Mlbstadiums} />
        <Route path='/Cmp' component={SportingKC} />
      </div>
    </BrowserRouter>
  );
}

export default App;
