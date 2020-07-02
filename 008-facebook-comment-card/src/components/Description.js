import React from 'react';

export default class Description extends React.Component {
    render() {
        return(
            <div className="comment">
                <p>{this.props.comment}</p>
            </div>
        );
    }
}