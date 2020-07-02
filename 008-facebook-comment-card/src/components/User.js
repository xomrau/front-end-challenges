import React from 'react';

export default class User extends React.Component {
    render() {
        return(
            <div className="user-name">
                <p>{this.props.name}</p>
            </div>
        );
    }
}