import React from 'react';
import ReactDOM from 'react-dom';
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
  
function App() {
    return (
        <div>
        <Welcome name="Huy Hoang" />
        <Comment author = {name:'duytan'}/>
        </div>
    );
}
  
function Avatar(props) {
    return (
    <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
    />
    );
}
function UserInfo(props) {
    return (
    <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
        {props.user.name}
        </div>
    </div>
    );
}

function Comment(props) {
    return (
    <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
        {props.text}
        </div>
        <div className="Comment-date">
        {formatDate(props.date)}
        </div>
    </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);