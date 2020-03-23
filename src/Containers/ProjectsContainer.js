import React from 'react';
import ProjectCard from '../Components/ProjectCard'

class ProjectsContainer extends React.Component{
    state = {
        projectIndex: 0,
        // project: this.props.user.project_cards[this.state.projectIndex]
    }

    scrollLeft = () => {
        console.log('slide to the left')
        // const finalIndex = this.props.user.project_cards.length - 1
        // if (this.state.projectIndex === 0){
        //     this.setState({projectIndex: finalIndex})
        // } else {
        //     this.setState({projectIndex: this.state.projectIndex - 1})
        // }
    }

    scrollRight = () => {
        console.log('slide to the right')
        // const finalIndex = this.props.user.project_cards.length - 1
        // if (this.state.projectIndex === finalIndex){
        //     this.setState({projectIndex: 0})
        // } else {
        //     this.setState({projectIndex: this.state.projectIndex + 1})
        // }
    }

    render(){
        return(
            <div>
                <h1>My Projects</h1><br></br>
                <ProjectCard project={this.state.project} />
                <button id='left-button' className='scroll-button' onClick={this.scrollLeft}>Previous Project</button>
                <button id='right-button' className='scroll-button' onClick={this.scrollRight}>Next Project</button>
            </div>
        )
    }
}

export default ProjectsContainer