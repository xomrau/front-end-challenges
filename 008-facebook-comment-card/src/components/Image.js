import React from 'react';

export default class Image extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <img src={this.props.src} alt="" />
            </div>
        );
    }
}