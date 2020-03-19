import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectsContainer from './ProjectsContainer'
import Schedule from '../Components/Schedule'

class PageContainer extends React.Component {
    state = {
        view: 'project'
    }

    renderView = () => {
        switch (this.state.view) {
            case 'project':
                return <Route path='/projects' render={routerProps => <ProjectsContainer {...routerProps} projects={this.props.projects}/>} />
            case 'schedule':
                return 
            case 'friends':
                return
            case 'todo':
                return
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