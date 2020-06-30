import React from 'react';
//import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState((state) => ({
      counter: state.counter + 1
    }));
  }
  decrement() {
    this.setState((state) => ({
      counter: state.counter - 1
    }));
  }
  reset() {
    this.setState(() => ({
      counter: 0
    }));
  }
  render(){
    return(
      <div className="App">
        <div className="buttons-group">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}
