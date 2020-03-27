import React from 'react';

class NewProjectForm extends React.Component {
    state = {
        name: '',
        logo: '',
        description: '',
        status: '',
        repoLink: '',
        color: '',
        notes: ''
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: this.state.name,
            logo: this.state.logo,
            description: this.state.description,
            status: this.state.status,
            repo_link: this.state.repoLink,
            notes: this.state.notes,
            user_id: this.props.user.id,
            color: this.state.color
        }
        fetch(this.props.url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(
            this.props.showNewProject(data),
            this.props.toggleForm()
        )
    }

    render(){
        return(
            <div id='NewProjectForm'>
                <h1>New Project</h1>
                <form onSubmit={this.handleSubmit}>
                    Name: <input name='name' value={this.state.name} onChange={this.handleChange} placeholder='Project Name'/><br></br><br></br>
                    Link to Logo Image: <input name='logo' value={this.state.logo} onChange={this.handleChange} placeholder='Link'/><br></br><br></br>
                    Description: <textarea name='description' value={this.state.description} onChange={this.handleChange} placeholder='Project Description'/><br></br><br></br>
                    Status: <select name='status' value={this.state.status} onChange={this.handleChange}>
                        <option value='In Progress'>In Progress</option>
                        <option value='Complete'>Complete</option>
                    </select><br></br><br></br>
                    Link to Repository: <input name='repoLink' value={this.state.repoLink} onChange={this.handleChange} placeholder='Link'/><br></br><br></br>
                    {/* Notes: <input name='notes' value={this.state.notes} onChange={this.handleChange}/><br></br><br></br> */}
                    Background Color for Project Card: <input name='color' value={this.state.color} onChange={this.handleChange} placeholder='Color'/><br></br><br></br>
                    <button className='card-button' type="submit">Submit</button>
                </form><br></br>
                <button className='card-button' onClick={this.props.toggleForm}>Back</button>
            </div>
        )
    }
}

export default NewProjectForm