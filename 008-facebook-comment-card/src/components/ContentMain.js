import React from 'react';

// user's name
const User = (props) => {
    return <div className="user-name">
        <p>{props.name}</p>
    </div>
};

// user's comment
const Description = (props) => {
    return <div className="comment">
        <p>
            {props.comment}
        </p>
    </div>;
};

// the like, reply, timeposted component
const Interactives = (props) => {
    return <div>
        <LikeReply />
        <TimePosted timePosted={props.time}/>
    </div>
};

const LikeReply = () => {
    return <>
        <span>Like</span>
        <span>&nbsp;·&nbsp;</span>
        <span>Reply</span>
        <span>&nbsp;·&nbsp;</span>
    </>
};

const TimePosted = (props) => {
    return <>
        <span>{props.timePosted}</span>
    </>
}

