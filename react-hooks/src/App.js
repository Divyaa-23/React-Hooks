/* import logo from './logo.svg'; */

import React, { useState } from "react";
import "./App.css";

function App() {
  /* use array destructuring to store */
  /* const [resourceType,setResourceType]= useState({resourceType:'Posts'}); */
  const [resourceType, setResourceType] = useState("Posts"); //Post here is the initail value passed to useState
  //useState returns an array of 2 values:initial state value, function to change initial state value
/*  const [name,setName]=useState('Fred');
  const [age,setAge] = useState(39);  */
/*   const [state,setState] = useState({resourceType:'Posts',name:'Fred'});
  const resourceType=state.resourceType;
  const name=state.name; */

/*   function changeName(){
    setState({...state,name:'Jane'});
  } */
  return (
    <div className="container">
      <div >
        <button onClick={() => setResourceType("Posts")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("Comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </div>
  );
}
/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceType: "Posts",
      name:'Fred',
      age:'24'
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
 */
export default App;
