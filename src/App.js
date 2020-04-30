import React, {Suspense, lazy} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const Homepage = lazy(() => import('./components/Home'))
const Navbar = lazy(() => import('./components/Navbar'));
const IndividualVideo = lazy(() => import('./components/Single'));
const Playlist = lazy(() => import('./components/Group'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>Loading Links ..."</div>}>
          <Navbar />
          <Route exact path='/' component={Homepage} />
          <Route path='/playlist' component={Playlist} />
          <Route path='/video' component={IndividualVideo} />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
