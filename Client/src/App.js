import React, { Component } from 'react';
import './App.css';
import Register from './comp/Register';
import Login from './comp/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './comp/Header';

class App extends Component {
  state={allUsers:[]} 

  render() {

    return (
      <Router>
        <div className="App">
          <Link to="/login">Sign in</Link>
          <Link to="/register">Register</Link>
          <Link to="/" className="home">&#8962;</Link>
          <Route path="/login" component={Login} />
          <Route path="/register" render={() => <Register refreshFunc={this.reDownloadData.bind(this)} />} />
          <Route exact path="/" component={Header} />
        
        </div>
      </Router>
    );
  }

  reDownloadData()
  {
    fetch('http://localhost:3000/register').then(r => r.json())
    .then((data)=>
        {
           this.setState({ allUsers:data }) 
        })
   
  }

}

export default App;
