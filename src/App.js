import React from 'react';
import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const App = () => {

    return (
      <div className="App">
        <div className='white'></div>

        <header className="App-header">
          <div>
            <p className="titolo"><strong>LIBRARY</strong></p>
            <Nav vertical>
              <NavItem className='border'>
                <NavLink className='link' tag={Link} to="artists">Artists</NavLink>
              </NavItem>

              <NavItem className='border'>
                <NavLink className='link' tag={Link} to="albums">Albums</NavLink>
              </NavItem>

              <NavItem className='border'>
                <NavLink className='link' tag={Link} to='playlist'>Playlist</NavLink>
              </NavItem>

              <NavItem>
                <NavLink disabled href="#">Recently Played</NavLink>
              </NavItem>
            </Nav>
          </div>
        </header>

      </div>
    );

}



export default App;
