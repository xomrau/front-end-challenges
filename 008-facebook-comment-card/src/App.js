import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ImageMain from './components/ImageMain';
import { ContentMain } from './components/ContentMain';

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
        <ContentMain nameParent={this.state.user} commentParent={this.state.comment} timeParent={this.state.timePosted} />
      </div>
    );
  }
}
