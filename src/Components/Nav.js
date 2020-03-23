import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

function Nav(props) {
    return (
      <div id="nav">
        <NavLink exact to="/projects" name="projects" onClick={props.handleNavClick}>
          My Projects
        </NavLink>
        <NavLink exact to="/schedule" name="schedule" onClick={props.handleNavClick}>
          My Schedule
        </NavLink>
        <NavLink exact to="/search" name="search" onClick={props.handleNavClick}>
          Search
        </NavLink>
        <NavLink exact to="/followers" name="followers" onClick={props.handleNavClick}>
          Followers
        </NavLink>
        <NavLink exact to="/following" name="following" onClick={props.handleNavClick}>
          Following
        </NavLink>
      </div>
    );
  }
  
export default Nav;