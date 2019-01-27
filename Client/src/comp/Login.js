import React, { Component } from 'react';
import '../App.css';

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <div className="Sign"><br/><br/>
           <form method='post' action='\login'>
        <h2>Sign in:</h2>
        <input type='text' onChange={this.handleTextChange.bind(this)} name='username' placeholder='enter username' value={this.state.username}></input><br/>
        <input type='password' onChange={this.handleTextChange.bind(this)} name='password' placeholder='enter password' value={this.state.password}></input><br/><br/>
        <input type='submit'></input>
     </form>
      </div>
    );
  }

  handleTextChange(ev) {
    /*
 ev.target.value//returns the value
 ev.target.name //return the name (like 'name' or 'last')
  */

    this.setState({ [ev.target.name]: ev.target.value })

    // details['name']= ev.target.value
    //details.name="" 
  }
  
  async sendForm() {
    const rawResponse = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    let jsonData = await rawResponse.json();
  }
}

export default Login;
