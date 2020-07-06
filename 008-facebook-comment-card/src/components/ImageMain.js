import React from 'react';

export default class ImageMain extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.src} alt="" />
            </div>
        );
    }
}