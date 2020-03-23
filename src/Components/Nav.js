import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Nav(props) {
    return (
      <Router>
      <div id="nav">
        <button onClick={props.handleNavClick}><div><Link to="/projects" name="projects">Projects</Link></div></button>
        <button onClick={props.handleNavClick}><div><Link to="/schedule" name="schedule">Schedule</Link></div></button>
        <button onClick={props.handleNavClick}><div><Link to="/search" name="search">Search</Link></div></button>
        <button onClick={props.handleNavClick}><div><Link to="/followers" name="followers">Followers</Link></div></button>
        <button onClick={props.handleNavClick}><div><Link to="/following" name="following">Following</Link></div></button>
        {/* <Button>
          <div><span aria-label="person" role="img">👤</span></div>
        </Button> */}
      </div>
      </Router>
    );
  }
  
export default Nav;