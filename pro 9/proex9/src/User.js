import React, {Component} from 'react';

class User extends Component {
    render() {
        return <li>{this.props.val}</li>;
    }
}

export default User;