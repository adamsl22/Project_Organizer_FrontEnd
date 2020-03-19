import React from 'react';
import ProjectCard from '../Components/ProjectCard'

class ProjectsContainer extends React.Component{
    state = {
        projectIndex: 0,
        project: this.props.projects[this.state.projectIndex]
    }

    scrollLeft = () => {
        const finalIndex = this.props.projects.length - 1
        if (this.state.projectIndex === 0){
            this.setState({projectIndex: finalIndex})
        } else {
            this.setState({projectIndex: this.state.projectIndex - 1})
        }
    }

    scrollRight = () => {
        const finalIndex = this.props.projects.length - 1
        if (this.state.projectIndex === finalIndex){
            this.setState({projectIndex: 0})
        } else {
            this.setState({projectIndex: this.state.projectIndex + 1})
        }
    }

    render(){
        return(
            <div>
                <ProjectCard project={this.state.project} />
                <button id='left-button' onClick={this.scrollLeft}>Previous Project</button>
                <button id='right-button' onClick={this.scrollRight}>Next Project</button>
            </div>
        )
    }
}

export default ProjectsContainer