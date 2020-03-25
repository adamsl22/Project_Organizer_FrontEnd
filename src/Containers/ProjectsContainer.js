import React from 'react';
import ProjectCard from '../Components/ProjectCard'

class ProjectsContainer extends React.Component{
    state = {
        projectIndex: 0,
        // project: this.props.user.project_cards[this.state.projectIndex]
        project: {
            name: 'Sample Project',
            logo: 'Image goes here',
            description: 'Awesomesauce project',
            status: 'In progress',
            repoLink: 'Link goes here',
            color: 'orange',
            notes: '',
            toDos: [{
                description: 'do X',
                date: '3-25',
                starttime: '13:30',
                endtime: '15:00'
            }, {
                description: 'do Y',
                date: '3-26',
                starttime: '11:30',
                endtime: '13:30'
            }]
        }
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

    addToDo = (data) => {
        const updateToDos = [...this.state.project.toDos, data]
        const updateProject = {
            name: this.state.project.name,
            logo: this.state.project.logo,
            description: this.state.project.description,
            status: this.state.project.status,
            repo_link: this.state.project.repoLink,
            toDos: updateToDos
        }
        this.setState({project: updateProject})
    }

    render(){
        return(
            <div id='ProjectsContainer'>
                <h1>My Projects</h1><br></br>
                <ProjectCard key={this.state.project.id} project={this.state.project} addToDo={this.addToDo}/>
                <div>
                    <button id='left-button' className='scroll-button' onClick={this.scrollLeft}>Previous Project</button>
                    <button id='right-button' className='scroll-button' onClick={this.scrollRight}>Next Project</button>
                </div>
            </div>
        )
    }
}

export default ProjectsContainer