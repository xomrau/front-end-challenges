import React from 'react';

// user's name
const User = (props) => {
    return <div className="userName">
        <p>{props.nameChild}</p>
    </div>;
};

// user's comment
const Description = (props) => {
    return <div className="comment">
        <p>
            {props.commentChild}
        </p>
    </div>;
};

// the like, reply, timeposted component
const Interactives = (props) => {
    return <div class="interactives">
        <LikeReply />
        <TimePosted timePosted={props.timeChild}/>
    </div>;
};

// like and reply component
const LikeReply = () => {
    return <>
        <span>Like</span>
        <span>&nbsp;·&nbsp;</span>
        <span>Reply</span>
        <span>&nbsp;·&nbsp;</span>
    </>;
};

// time posted component, child component of Interactives
const TimePosted = (props) => {
    return <>
        <span>{props.timePosted}</span>
    </>;
}

// content component for the comment card
const ContentMain = (props) => {
    return <div className="mainContent">
        <User nameChild={props.nameParent}/>
        <Description commentChild={props.commentParent}/>
        <Interactives timeChild={props.timeParent}/>
    </div>;
}

export { User, Description, Interactives, LikeReply, TimePosted, ContentMain };