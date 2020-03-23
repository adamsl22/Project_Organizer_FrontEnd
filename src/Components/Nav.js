import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Nav(props) {
    return (
      <div id="nav">
        <h2>Name{/*props.user.name*/}</h2><br></br><br></br>
        <button className='nav-button' onClick={props.handleNavClick}><div><Link to="/projects" name="projects">My Projects</Link></div></button><br></br><br></br><br></br>
        <button className='nav-button' onClick={props.handleNavClick}><div><Link to="/schedule" name="schedule">My Schedule</Link></div></button><br></br><br></br><br></br>
        <button className='nav-button' onClick={props.handleNavClick}><div><Link to="/followers" name="followers">Followers</Link></div></button><br></br><br></br><br></br>
        <button className='nav-button' onClick={props.handleNavClick}><div><Link to="/following" name="following">Following</Link></div></button><br></br><br></br><br></br><br></br><br></br>
        <button className='nav-button' onClick={props.handleNavClick}><div><Link to="/search" name="search">Search Github</Link></div></button><br></br><br></br><br></br><br></br><br></br>
        <button className='nav-button' onClick={props.logOut}>Log Out</button>
      </div>
    );
  }
  
export default Nav;