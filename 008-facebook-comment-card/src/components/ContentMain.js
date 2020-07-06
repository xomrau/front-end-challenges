import React from 'react';

// user's name
const User = (props) => {
    return <>
        <span className="userName"><a href="#">{props.nameChild}</a></span>
    </>;
};

// user's comment
const Description = (props) => {
    return <>
        <span className="comment">
            {props.commentChild}
        </span>
    </>;
};

// the like, reply, timeposted component
const Interactives = (props) => {
    return <div className="interactives">
        <LikeReply />
        <TimePosted timePosted={props.timeChild}/>
    </div>;
};

// like and reply component
const LikeReply = () => {
    return <>
        <span><a href="#">Like</a></span>
        <span>&nbsp;·&nbsp;</span>
        <span><a href="#">Reply</a></span>
        <span>&nbsp;·&nbsp;</span>
    </>;
};

// time posted component, child component of Interactives
const TimePosted = (props) => {
    return <>
        <span><a href="#">{props.timePosted}</a></span>
    </>;
}

// content component for the comment card
const ContentMain = (props) => {
    return <div className="mainContent">
        <div class="content">
            <span>
                <User nameChild={props.nameParent}/>
                <Description commentChild={props.commentParent}/>
            </span>
        </div>
        <Interactives timeChild={props.timeParent}/>
    </div>;
}

export { User, Description, Interactives, LikeReply, TimePosted, ContentMain };