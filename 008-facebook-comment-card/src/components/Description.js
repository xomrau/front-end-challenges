import React from 'react';

export default class Description extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="text">
                <p>{this.props.text}</p>
            </div>
        );
    }
}