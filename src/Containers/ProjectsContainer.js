import React from 'react';
import ProjectCard from '../Components/ProjectCard'
import NewProjectForm from '../Components/NewProjectForm'
import EditProjectForm from '../Components/EditProjectForm'

const PROJCARD_URL = "http://localhost:3001/project_cards"

class ProjectsContainer extends React.Component{
    state = {
        projectIndex: 0,
        showNewProjectForm: false,
        showEditForm: false,
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
                project: this.state.projects[finalIndex]
            })
        } else {
            const newIndex = this.state.projectIndex - 1
            this.setState({
                projectIndex: newIndex,
                project: this.state.projects[newIndex]
            })
        }
    }

    scrollRight = () => {
        const finalIndex = this.state.projects.length - 1
        if (this.state.projectIndex === finalIndex){
            this.setState({
                projectIndex: 0,
                project: this.state.projects[0]
            })
        } else {
            const newIndex = this.state.projectIndex + 1
            this.setState({
                projectIndex: newIndex,
                project: this.state.projects[newIndex]
            })
        }
    }

    toggleNewProjectForm = () => {
        this.setState(prevState => ({showNewProjectForm: !prevState.showNewProjectForm}))
    }

    showNewProject = (data) => {
        const newProjects = this.state.projects.push(data)
        const newFinalIndex = newProjects.length - 1
        this.setState({
            projectIndex: newFinalIndex,
            projects: newProjects,
            project: data
        })
    }

    toggleEditForm = () => {
        this.setState(prevState => ({showEditForm: !prevState.showEditForm}))
    }

    updateProject = (data) => {
        this.setState({project: data})
    }

    removeProject = (id) => {
        const newProjects = this.state.projects.filter(project => project.id !== id)
        this.setState({
            projectIndex: 0,
            projects: newProjects,
            project: this.state.projects[this.state.projectIndex]
        })
    }

    render(){
        return(
            <div className='projects-container'>
                {this.state.showNewProjectForm ?
                <NewProjectForm url={PROJCARD_URL} user={this.props.user} toggleForm={this.toggleNewProjectForm} showNewProject={this.showNewProject}/>
                : <div className='projects-container'>
                    {this.state.showEditForm ?
                    <EditProjectForm project={this.state.project} url={PROJCARD_URL} toggleForm={this.toggleEditForm} updateProject={this.updateProject} removeProject={this.removeProject}/>
                    : <div className='projects-container'><h1>My Projects</h1><br></br>
                        {this.state.project ? <div className='projects-container'>
                            <ProjectCard key={this.state.project.id} project={this.state.project} toggleEditForm={this.toggleEditForm}/>
                            <div>
                                <button id='left-button' className='scroll-button' onClick={this.scrollLeft}>Previous Project</button>
                                <button id='right-button' className='scroll-button' onClick={this.scrollRight}>Next Project</button>
                            </div>
                        </div> : null }
                        <button id='new-project-button' onClick={this.toggleNewProjectForm}>Add New Project</button>
                    </div>}
                </div>}
            </div>
        )
    }
}

export default ProjectsContainer