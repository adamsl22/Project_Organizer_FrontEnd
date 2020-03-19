import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectsContainer from './ProjectsContainer'
import Schedule from '../Components/Schedule'
import Followers from '../Components/Followers'
import Following from '../Components/Following'
import Search from '../Components/Search'

class PageContainer extends React.Component {
    renderView = () => {
        switch (this.props.view) {
            case 'projects':
                return <Route path='/projects' render={routerProps => <ProjectsContainer {...routerProps} user={this.props.user}/>} />
            case 'schedule':
                return <Route path='/schedule' render={routerProps => <Schedule {...routerProps} user={this.props.user}/>} />
            case 'followers':
                return <Route path='/followers' render={routerProps => <Followers {...routerProps} user={this.props.user}/>} />
            case 'following':
                return <Route path='/following' render={routerProps => <Following {...routerProps} user={this.props.user}/>} />
            case 'search':
                return <Route path='/search' render={routerProps => <Search {...routerProps}/>} />
        }
    }

    render() {
        return (
        <div id="PageContainer">
            <Router>
                {this.renderView()}
            </Router>
        </div>
        );
    }
}
  
export default PageContainer;