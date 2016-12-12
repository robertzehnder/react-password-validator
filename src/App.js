import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd: '',
      confirmPwd: ''
    };

    this.setEmail = this.setEmail.bind(this);
    this.setPwd = this.setPwd.bind(this);
    this.setConfirmPwd = this.setConfirmPwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setEmail(event) {
    this.setState({email: event.target.value});
    event.preventDefault()
  }

  setPwd(event) {
    this.setState({pwd: event.target.value});
    event.preventDefault()
  }

  setConfirmPwd(event) {
    this.setState({confirmPwd: event.target.value});
    event.preventDefault()
  }

  handleSubmit(event) {
    console.log(this.state.email);
    console.log(this.state.pwd);
    console.log(this.state.confirmPwd);

    if (this.state.pwd === this.state.confirmPwd) {
      alert('Password Matches for: ' + this.state.email);
      event.preventDefault();
    }
    else {
      alert("Whoops...")
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="App">
        <p><input placeholder="Email" type="text" value={this.state.email} onChange={this.setEmail}/></p>
        <p><input placeholder="Password" type="Password" value={this.state.pwd} onChange={this.setPwd}/></p>
        <p><input placeholder="Confirm Password" type="Password" value={this.state.confirmPwd} onChange={this.setConfirmPwd}/></p>
        <p><input type="submit" value="Submit"/></p>
      </form>
    );
  }
}

export default App;
