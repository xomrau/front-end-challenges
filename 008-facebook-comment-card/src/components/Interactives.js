import React from 'react';
import LikeReply from './LikeReply';
import TimePosted from './TimePosted';

export default class Interactives extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <LikeReply />
                <TimePosted />
            </div>
        );
    }
}