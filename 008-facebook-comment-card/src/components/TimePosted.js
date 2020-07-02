import React from 'react';

export default class TimePosted extends React.Component {
    render() {
        return(
            <>
                <span>{this.props.timePosted}</span>
            </>
        );
    }
}