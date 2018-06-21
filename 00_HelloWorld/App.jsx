import React from 'react';
const name = 'huy hoang'
const user = {
    firstname: 'Nguyen',
    lastname: 'Huy Hoang'
}

function formatName(_user){
    return _user.firstname + ' ' + _user.lastname;
}
class App extends React.Component {
    render() {
        return (
        <div>Hello {formatName(user)}!!!</div>
        );
    }
}

export default App;
