import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <Image />
        <User />
        <Description />
        <Interactives />
      </div>
    );
  }
}
