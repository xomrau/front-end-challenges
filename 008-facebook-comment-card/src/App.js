import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Image from './components/ImageMain';
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
        <ImageMain src={this.state.src} />
        <ContentMain name={this.state.user} comment={this.state.comment} time={this.state.timePosted} />
      </div>
    );
  }
}
