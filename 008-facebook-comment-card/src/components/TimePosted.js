import React from 'react';

export default class TimePosted extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="time-posted">
                <span>{this.props.timePosted}</span>
            </div>
        );
    }
}