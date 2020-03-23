import React from 'react';

const USER_URL = "localhost:3001/users"

class LogInForm extends React.Component {
    state = {
        username: '',
        password: '',
        name: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //github verification
        switch (this.props.userNorR) {
            case 'R':
                fetch(USER_URL)
                .then(resp => resp.json())
                .then(users => {
                    const user = users.filter(user => user.username === this.state.username)[0]
                    this.props.setUser(user)
                })
                break
            case 'N':
                fetch(USER_URL,{
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
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Name: <input name='name' value={this.state.name} onChange={this.handleChange} placeholder='name'/>
                Github username: <input name='username' value={this.state.username} onChange={this.handleChange} placeholder='username'/>
                Github password: <input name='password' type='password' value={this.state.password} onChange={this.handleChange} placeholder='password'/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default LogInForm