import React from 'react';

export default class ImageMain extends React.Component {
    render() {
        return(
            <div className="userDP">
                <img src={this.props.src} alt="user dp" />
            </div>
        );
    }
}