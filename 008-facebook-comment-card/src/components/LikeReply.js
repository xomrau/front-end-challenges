import React from 'react';

export default class LikeReply extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <span>Like</span>
                <span>&nbsp;·&nbsp;</span>
                <span>Reply</span>
                <span>&nbsp;·&nbsp;</span>
            </div>
        );
    }
}