import React from 'react';

const TO_DO_URL = "localhost:3001/to_dos"

class ToDoForm extends React.Component {
    state = {
        scheduling: false,
        description: '',
        date: '',
        starttime: '',
        endtime: '',
    }

    toggleScheduleEntry = () => {
        this.setState(prevState => ({scheduling: !prevState.scheduling}))
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            description: this.state.description,
            completed: false,
            project_id: this.props.project_id,
            date: this.state.date,
            starttime: this.state.starttime,
            endtime: this.state.endtime
        }
        fetch(TO_DO_URL,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(
            this.props.addToDo(data),
            this.props.toggleForm()
        )
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Task: <textarea name='description' value={this.state.description} onChange={this.handleChange}/><br></br><br></br>
                {this.state.scheduling ?
                <div>
                Date: <input name='date' value={this.state.date} onChange={this.handleChange}/><br></br>
                Starting Time: <input name='starttime' value={this.state.starttime} onChange={this.handleChange}/><br></br>
                Ending Time: <input name='endtime' value={this.state.endtime} onChange={this.handleChange}/>
                </div>
                : <button onClick={this.toggleScheduleEntry}>Schedule this task?</button>}<br></br><br></br>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default ToDoForm