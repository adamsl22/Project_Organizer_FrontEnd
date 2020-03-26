import React from 'react';
import ToDoForm from './ToDoForm'

class ProjectCard extends React.Component{
  state = {
    showingFront: true,
    showingToDoForm: false,
    showingNoteForm: false
  }
  
  toggleShowingFront = () => {
    this.setState(prevState => ({showingFront: !prevState.showingFront}))
  }

  showFront = () => {
    return (
      <div>
        <h2>{this.props.project.name}</h2>
        <image src={this.props.project.logo}>image goes here</image>
        <p>{this.props.project.description}</p>
        <p>Status: {this.props.project.status}</p>
        <p>Repository Link: <a href={this.props.project.repo_link}>link</a></p>
        <button className='card-button' onClick={this.toggleShowingFront}>Show Back</button>
      </div>
    )
  }

  showBack = () => {
    return (
      <div>
        <h2>{this.props.project.name}</h2>
        <h3>Tasks: {this.props.project.to_dos && this.props.project.to_dos.map(toDo => <li className='li'>{toDo.description}</li>)}</h3>
        {this.state.showingToDoForm ?
        <ToDoForm project_id={this.props.project.id} addToDo={this.props.addToDo} toggleForm={this.toggleToDoForm}/>
        : <button className='card-button' onClick={this.toggleToDoForm}>Add Task</button>}
        <br></br><br></br>
        {/* {this.props.project.notes ?
        <div>Notes: {this.props.project.notes}<button className='card-button' onClick={this.toggleNoteForm}>Edit Notes</button></div>
        : <button className='card-button' onClick={this.toggleNoteForm}>Add Notes</button>}
        <br></br><br></br> */}
        <button className='card-button' onClick={this.toggleShowingFront}>Show Front</button>
      </div>
    )
  }

  toggleToDoForm = () => {
    this.setState(prevState => ({showingToDoForm: !prevState.showingToDoForm}))
  }

  toggleNoteForm = () => {
    this.setState(prevState => ({showingNoteForm: !prevState.showingNoteForm}))
  }

  render(){
    document.documentElement.style.setProperty('--bc', this.props.project.color)
    return (
      <div className='project-card'>
        {this.state.showingFront ? this.showFront() : this.showBack()}
      </div>
    );
  }
}

export default ProjectCard;
  