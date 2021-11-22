import React, {useState} from "react";
import './App.css';

function App() {
  const [count,setCounter]=useState(0);
 /*  const [name,setName]=useState("Tom"); */
  return (
    <div class="container">
      <h1>Count : {count}</h1>
    <div>
      <button onClick={()=>setCounter(count+1)}>Increment</button>
      <button onClick={()=>setCounter(count-1)}>Decrement</button>
     {/*  <button onClick={()=>setName('Jerry')}>Change Name</button> */}
    </div>
    </div>
  )
}


/* class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: props.name,
    };
  }
  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  decrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };
  changeName = () => {
    this.setState({
      name: this.props.name2,
    });
  };

  render() {
    return (
      <div>
        <h1>
          The count of {this.state.name} is {this.state.count}
        </h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.changeName}>Last Name</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter name="Tina" name2="Taylor" />
        <Counter name="Monica" name2="Geller" />
        <Counter name="Tom" name2="John" />
      </div>
    );
  }
}
 */
/* ReactDOM.render(<App />, document.getElementById("root")); */

export default App;
