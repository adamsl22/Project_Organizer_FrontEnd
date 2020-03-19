import React from 'react';
import './App.css';
import PageContainer from './Containers/PageContainer'
import Nav from './Components/Nav'

const USER_URL = "localhost:3001/users"

class App extends React.Component {
  state = {
    user: {},
    view: 'projects'
  }
  
  componentDidMount(){
    fetch(USER_URL)
    .then(resp => resp.json())
    .then(users => {
      //match user with session id? => currentUser
      //this.setState({user: currentUser})
    })
  }

  switchView = (e) => {
    //based on navbar button id?
  }
  
  render(){
    return (
      <div className="App">
        <Nav user={this.state.user} switchView={this.switchView}/>
        <PageContainer user={this.state.user} view={this.state.view}/>
      </div>
    );
  }
}

export default App;
