import React from 'react';
import ProjectCard from '../Components/ProjectCard'
import NewProjectForm from '../Components/NewProjectForm'

const PROJCARD_URL = "http://localhost:3001/project_cards"

class ProjectsContainer extends React.Component{
    state = {
        projectIndex: 0,
        showNewProjectForm: false,
        projects: [],
        project: null
    }

    componentDidMount(){
        fetch(PROJCARD_URL)
        .then(resp => resp.json())
        .then(projects => {
            const user_projects = projects.filter(project => project.user_id === this.props.user.id)
            if (user_projects){
                this.setState({
                    projects: user_projects,
                    project: user_projects[this.state.projectIndex]
                })
            }
        })
    }

    scrollLeft = () => {
        const finalIndex = this.state.projects.length - 1
        if (this.state.projectIndex === 0){
            this.setState({
                projectIndex: finalIndex,
                project: this.state.projects[this.state.projectIndex]
            })
        } else {
            this.setState({
                projectIndex: this.state.projectIndex - 1,
                project: this.state.projects[this.state.projectIndex]
            })
        }
    }

    scrollRight = () => {
        const finalIndex = this.state.projects.length - 1
        if (this.state.projectIndex === finalIndex){
            this.setState({
                projectIndex: 0,
                project: this.state.projects[this.state.projectIndex]
            })
        } else {
            this.setState({
                projectIndex: this.state.projectIndex + 1,
                project: this.state.projects[this.state.projectIndex]
            })
        }
    }

    toggleNewProjectForm = () => {
        this.setState(prevState => ({showNewProjectForm: !prevState.showNewProjectForm}))
    }

    showNewProject = (data) => {
        this.setState({
            project: data
        })
    }

    render(){
        return(
            <div id='ProjectsContainer'>
                {this.state.showNewProjectForm ?
                <NewProjectForm url={PROJCARD_URL} user={this.props.user} toggleForm={this.toggleNewProjectForm} showNewProject={this.showNewProject}/>
                : <div id='ProjectsInner'><h1>My Projects</h1><br></br>
                {this.state.project ? <div id='InnerInner'><ProjectCard key={this.state.project.id} project={this.state.project} addToDo={this.addToDo}/>
                <div>
                    <button id='left-button' className='scroll-button' onClick={this.scrollLeft}>Previous Project</button>
                    <button id='right-button' className='scroll-button' onClick={this.scrollRight}>Next Project</button>
                </div></div> : null }
                <button id='new-project-button' onClick={this.toggleNewProjectForm}>Add New Project</button></div>}
            </div>
        )
    }
}

export default ProjectsContainer