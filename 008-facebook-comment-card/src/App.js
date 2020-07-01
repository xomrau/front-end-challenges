import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from '../components/Image';
import User from '../components/User';
import Description from '../components/Description';
import Interactives from '../components/Interactives';

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
