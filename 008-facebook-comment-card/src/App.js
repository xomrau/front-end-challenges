import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import User from './components/User';
import Description from './components/Description';
import Interactives from './components/Interactives'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: 'https://via.placeholder.com/50',
      user: 'James Bond',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timePosted: '12s'
    }
  }
  render() {
    return(
      <div>
        <Image src={this.state.src} />
        <User name={this.state.user} />
        <Description comment={this.state.comment} />
        <Interactives time={this.state.timePosted} />
      </div>
    );
  }
}
