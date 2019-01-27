import React, { Component } from 'react';
import '../App.css';

class Register extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <div className="Reg"> <br /><br />
        <h2>Register:</h2>
        <input type='text' onChange={this.handleTextChange.bind(this)} name='username' placeholder='enter username' value={this.state.username}></input><br />
        <input type='password' onChange={this.handleTextChange.bind(this)} name='password' placeholder='enter password' value={this.state.password}></input><br /><br />
        <button onClick={this.sendForm.bind(this)}>Submit</button>
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
    
    const rawResponse = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    let jsonData = await rawResponse.json();
    if(this.state.username != "" && this.state.password != ""){
      alert("Thanks"+this.state.username+",\nYou are now registered!")
    }
  }
}

export default Register;
