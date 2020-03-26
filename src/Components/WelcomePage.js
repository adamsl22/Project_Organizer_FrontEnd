import React from 'react';
import LogInForm from './LogInForm';

class WelcomePage extends React.Component{
    state = {
        userNorR: null
    }

    renderWelcome = () => {
        if (this.state.userNorR === null) {
            return (
                <div>
                    <h1>Welcome</h1>
                    <button className="welcome-button" onClick={this.returningUser}>Returning User</button>
                    <h2>or</h2>
                    <button className="welcome-button" onClick={this.newUser}>New User</button>
                </div>
            )
        } else {
            return <LogInForm userNorR={this.state.userNorR} setUser={this.props.setUser}/>
        }
    }

    returningUser = () => {
        this.setState({userNorR: 'R'})
    }
    newUser = () => {
        this.setState({userNorR: 'N'})
    }

    render(){
        return(
            <div id="WelcomePage">
                {this.renderWelcome()}
            </div>
        )
    }

}

export default WelcomePage