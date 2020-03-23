import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectsContainer from './ProjectsContainer'
import Schedule from '../Components/Schedule'
import Followers from '../Components/Followers'
import Following from '../Components/Following'
import Search from '../Components/Search'

class PageContainer extends React.Component {

    render() {
        return (
        <div id="PageContainer">
            <Route path='/projects' render={routerProps => <ProjectsContainer {...routerProps} user={this.props.user}/>} />
            <Route path='/schedule' render={routerProps => <Schedule {...routerProps} user={this.props.user}/>} />
            <Route path='/followers' render={routerProps => <Followers {...routerProps} user={this.props.user}/>} />
            <Route path='/following' render={routerProps => <Following {...routerProps} user={this.props.user}/>} />
            <Route path='/search' render={routerProps => <Search {...routerProps} user={this.props.user}/>} />
        </div>
        );
    }
}
  
export default PageContainer;