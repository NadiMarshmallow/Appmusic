import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Artists from './components/artist/artists.js';
import Artist from './components/artist/artist.js';
import Albums from './components/album/albums.js';
import Album from './components/album/album.js';
import Playlist from './components/playlist/playlist.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import store  from './redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newplaylist from './components/newplaylist/newplaylist';
import Music from './components/music/music.js'
  
window.store = store

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/Artists" component={Artists} />
        <Route path="/Artist/:artist_id" component={Artist} />
        <Route path="/Albums" component={Albums} />
        <Route path="/Album/:album_id" component={Album} />
        <Route path="/Music" component={Music} />
        <Route path="/Playlist" component={Playlist} />
        <Route path="/Newplaylist" component={Newplaylist} />
        <Music></Music>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
