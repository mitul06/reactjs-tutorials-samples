// import React, {Component} from 'react';
//
// // inline css
// class App extends Component {
//     state = {
//         change: false
//     }
//
//     changeBgBtn = () => {
//         this.setState({change: true})
//     }
//
//
//     render() {
//         const btnStyle = {
//             color: "black",
//             backgroundColor: "orange",
//             fontSize: "20px"
//         }
//         const cStyle = {
//             color: "#4822a8"
//         }
//
//         const cStyle1 = {
//             backgroundColor: "skyblue"
//         }
//
//         if (this.state.change) {
//             btnStyle.backgroundColor = "#13eb7b"
//             btnStyle.fontSize = "30px"
//             cStyle.color="#ad0e0e"
//         }
//
//         return (
//             <div>
//                 <h1 style={{...cStyle, ...cStyle1}}>Hello</h1>
//                 <button onClick={this.changeBgBtn} style={btnStyle}>Button</button>
//             </div>
//         );
//     }
// }
//
// export default App;

// // External Css

// import React, {Component, Fragment} from 'react';
// import "./App.css"
// import User from "./User";
//
// class App extends Component {
//     render() {
//         let style = false;
//
//
//         return (
//             <Fragment>
//                 <h1 className="txtb txts">Hello</h1>
//                 <User name={"Deep"} rang={style ? "txtb":"txtg"}/>
//             </Fragment>
//         );
//     }
// }
//
// export default App;

// // CSS Module

import React, {Component} from 'react';
import User from './User';
import styles from './App.module.css'
import "./App.css"

class App extends Component {
    render() {
        return (
            <div>
               <h1 className={styles.txt} >Hello</h1>
               <User name="Mitul"/> 
               <h2 className="txtbg">How are you?</h2>
            </div>
        );
    }
}

export default App;