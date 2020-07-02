import React from 'react';
import LikeReply from './LikeReply';
import TimePosted from './TimePosted';

export default class Interactives extends React.Component {
    render() {
        return(
            <div>
                <LikeReply />
                <TimePosted timePosted={this.props.time}/>
            </div>
        );
    }
}