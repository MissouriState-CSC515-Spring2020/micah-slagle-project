import React from 'react';
import './App.css';
import IndividualVideo from './components/Single';
import Playlist from './components/Group';
import Navbar from './components/Navbar';
import Homepage from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Homepage} />
        <Route path='/Mlb' component={Playlist} />
        <Route path='/Cmp' component={IndividualVideo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
