import axios from "axios";
import React, { Component } from "react";
import './back.css';
class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <div className="table">
      <table border={1}>
      <thead>
        <tr>
          <th>AUTHOR NAME</th>
          <th>BOOK NAME</th>
          <th>AUTHOR ID</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.authorid}>
            <td>{user.authorname}</td>
            <td>{user.book}</td>
            <td>{user.authorid}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    );
  }}
  
export default Showdata;