import React, { Component } from 'react';
import './input.css';
import axios from 'axios'
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        authorid:'',
        authorname:'',
        book: ''
    };
  }
  handleauthoridChange = (event) => {
    this.setState({ authorid: event.target.value });
  };
  handleauthornameChange = (event) => {
    this.setState({ authorname: event.target.value });
  };
  handlebookChange = (event) => {
    this.setState({ book: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        authorid: this.state.authorid,
        authorname: this.state.authorname,
        book: this.state.book,
      };
      axios.post('http://127.0.0.1:8080/post',data)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">Id</label>
        <input
          className="sign"
          type="text"
          value={this.state.authorid}
          onChange={this.handleauthoridChange}/>
        <label className="sign-label">Name</label>
        <input
          className="sign"
          type="text"
          value={this.state.authorname}
          onChange={this.handleauthornameChange}/>
        <label className="sign-label">Book</label>
        <input
          className="sign"
          type="text"
          value={this.state.book}
          onChange={this.handlebookChange}
        /> 
        <button className="login-button" type="submit">
          update
        </button>
      </form>
    );
  }
}

export default Signup;