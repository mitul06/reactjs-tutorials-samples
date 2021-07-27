import React, {Component} from 'react'
import styles from './User.module.css'

class User extends Component {
    render() {
        return <h2 className={styles.txt}>Hello {this.props.name}</h2>
    }
}

export default User;