import React from 'react';
import './App.css';
import PageContainer from './Containers/PageContainer'
import Nav from './Components/Nav'

const USER_URL = "localhost:3001/users"

class App extends React.Component {
  state = {
    user: {},
    projects: this.state.user.project_cards 
  }
  
  componentDidMount(){
    fetch(USER_URL)
    .then(resp => resp.json())
    // .then(users => {
    //   //match user with session id? => currentUser
    //   //this.setState({user: currentUser})
    // })
  }
  
  render(){
    return (
      <div className="App">
        <Nav user={this.state.user}/>
        <PageContainer projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
