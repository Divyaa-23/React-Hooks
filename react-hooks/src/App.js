/* import logo from './logo.svg'; */

import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceType: "Posts",
    };
  }
  setPosts = () => {
    this.setState({
      resourceType: "Posts",
    });
  };
  setUsers = () => {
    this.setState({
      resourceType: "Users",
    });
  };
  setComments = () => {
    this.setState({
      resourceType: "Comments",
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <button onClick={this.setPosts}>Posts</button>
          <button onClick={this.setUsers}>Users</button>
          <button onClick={this.setComments}>Comments</button>
        </div>
        <h1>{this.state.resourceType}</h1>
      </div>
    );
  }
}

export default App;
