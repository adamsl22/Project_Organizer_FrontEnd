import React from 'react';

const TO_DO_URL = "localhost:3001/to_dos"
const SCHED_URL = "localhost:3001/schedule_entries"

class ToDoForm extends React.Component {
    state = {
        scheduling: false,
        description: '',
        date: '',
        starttime: '',
        endtime: '',
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(TO_DO_URL,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({username: this.state.username, password: this.state.password, name: this.state.name})
        })
        .then(resp => resp.json())
        .then(user => this.props.setUser(user))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Task: <input name='description' value={this.state.description} onChange={this.handleChange}/>
                Github password: <input name='password' type='password' value={this.state.password} onChange={this.handleChange} placeholder='password'/>
            </form>
        )
    }
}

export default ToDoForm