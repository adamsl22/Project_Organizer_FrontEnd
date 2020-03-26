import React from 'react';
import ProjectCard from '../Components/ProjectCard'
import NewProjectForm from '../Components/NewProjectForm'

class ProjectsContainer extends React.Component{
    state = {
        projectIndex: 0,
        showNewProjectForm: false,
        project: this.props.user.project_cards[this.state.projectIndex]
        // project: {
        //     name: 'Sample Project',
        //     logo: 'Image goes here',
        //     description: 'Awesomesauce project',
        //     status: 'In progress',
        //     repoLink: 'Link goes here',
        //     color: 'orange',
        //     notes: '',
        //     toDos: [{
        //         description: 'do X',
        //         date: '3-25',
        //         starttime: '13:30',
        //         endtime: '15:00'
        //     }, {
        //         description: 'do Y',
        //         date: '3-26',
        //         starttime: '11:30',
        //         endtime: '13:30'
        //     }]
        // }
    }

    scrollLeft = () => {
        console.log('slide to the left')
        const finalIndex = this.props.user.project_cards.length - 1
        if (this.state.projectIndex === 0){
            this.setState({projectIndex: finalIndex})
        } else {
            this.setState({projectIndex: this.state.projectIndex - 1})
        }
    }

    scrollRight = () => {
        console.log('slide to the right')
        const finalIndex = this.props.user.project_cards.length - 1
        if (this.state.projectIndex === finalIndex){
            this.setState({projectIndex: 0})
        } else {
            this.setState({projectIndex: this.state.projectIndex + 1})
        }
    }

    toggleNewProjectForm = () => {
        this.setState(prevState => ({showNewProjectForm: !prevState.showNewProjectForm}))
    }

    addToDo = (data) => {
        let updateToDos
        if (this.state.project.to_dos){
            updateToDos = [...this.state.project.to_dos, data]
        } else {
            updateToDos = [data]
        }
        const updateProject = {
            name: this.state.project.name,
            logo: this.state.project.logo,
            description: this.state.project.description,
            status: this.state.project.status,
            repo_link: this.state.project.repo_link,
            color: this.state.project.color,
            notes: this.state.project.notes,
            to_dos: updateToDos
        }
        this.setState({project: updateProject})
    }

    showNewProject = (data) => {
        this.setState({
            projectIndex: this.props.user.project_cards.length - 1,
            project: data
        })
    }

    render(){
        return(
            <div id='ProjectsContainer'>
                {this.state.showNewProjectForm ?
                <NewProjectForm user={this.props.user} toggleForm={this.toggleNewProjectForm} showNewProject={this.showNewProject}/>
                : <div id='ProjectsInner'><h1>My Projects</h1><br></br>
                <ProjectCard key={this.state.project.id} project={this.state.project} addToDo={this.addToDo}/>
                <div>
                    <button id='left-button' className='scroll-button' onClick={this.scrollLeft}>Previous Project</button>
                    <button id='right-button' className='scroll-button' onClick={this.scrollRight}>Next Project</button>
                </div>
                <button id='new-project-button' onClick={this.toggleNewProjectForm}>Add New Project</button></div>}
            </div>
        )
    }
}

export default ProjectsContainer