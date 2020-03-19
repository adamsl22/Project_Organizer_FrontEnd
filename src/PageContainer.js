import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Project from './Project'
import Schedule from './Schedule'

const PROJECTSURL = 'http://localhost:3001/'

class PageContainer extends React.Component {
    state = {
        view: 'project',
        projects: []
    }

    componentDidMount = () => {
        fetch(PROJECTSURL)
        .then(resp => resp.json())
        .then(projects => {this.setState({projects: projects})
        })
    }

    renderView = () => {
        switch (this.state.view) {
            case 'project':
                return <Route path='/project' render={routerProps => <Project {...routerProps} projects={this.state.projects}/>} />
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
            { this.renderView() }
        </div>
        );
    }
}
  
  export default PageContainer;