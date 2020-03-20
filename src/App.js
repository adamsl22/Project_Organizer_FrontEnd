import React from 'react';
import './App.css';
import PageContainer from './Containers/PageContainer'
import Nav from './Components/Nav'
import WelcomePage from './Components/WelcomePage'

const USER_URL = "localhost:3001/users"

class App extends React.Component {
  state = {
    loggedIn: false,
    user: {},
    view: 'projects'
  }
  
  componentDidMount(){
    const user_id = localStorage.user_id
    if(user_id){
      fetch(USER_URL)
      .then(resp => resp.json())
      .then(users => {
        const user = users.filter(user => user.username === this.state.username)[0]
        this.setState({
          loggedIn: true,
          user: user
        })
      })
    }
  }

  switchView = (e) => {
    //based on navbar button id?
  }

  setUser = (user) => {
    this.setState({
      loggedIn: true,
      user: user
    })
    localStorage.user_id = user.id
  }

  logOut = () => {
    localStorage.removeItem('user_id')
    this.setState({
      loggedIn: false,
      user: {}
    })
  }
  
  render(){
    return (
      <div className="App">
        <Nav loggedIn={this.state.loggedIn} user={this.state.user} switchView={this.switchView} logOut={this.logOut}/>
        {this.state.loggedIn ? <PageContainer user={this.state.user} view={this.state.view}/> : <WelcomePage setUser={this.setUser}/>}
      </div>
    );
  }
}

export default App;
