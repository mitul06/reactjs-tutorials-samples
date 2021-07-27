// import React, {Component} from 'react'
//

// List in React
// export default class App extends Component {
//     render() {
//         const arr = [10, 20, 30, 40, 50]
//         // const newArr = arr.map((n) => <li>{n * 2}</li>)
//         return (
//             <ul>
//                 {
//                     arr.map((n) => <li>{n * 3}</li>)
//                 }
//             </ul>
//         )
//     }
// }


// using state to iterate data
// import React, {Component} from 'react';
//
// class App extends Component {
//     state = {
//         user : [
//             {id:101,name:"Mitul",pass:"123hsd"},
//             {id:102,name:"Daksh",pass:"334fdg"},
//             {id:103,name:"Paras",pass:"3433dc"}
//         ],
//         isLoggedIn: false
//     }
//     render() {
//         const newUser = this.state.user.map((u) => {
//             return <h2>ID: {u.id}, Name: {u.name}, Pass : {u.pass}</h2>
//         })
//         return (
//             <div>
//                 {newUser}
//             </div>
//         );
//     }
// }
//
// export default App;


// Key in React
// import React, {Component} from 'react';
//
// class App extends Component {
//     state = {
//         user : [
//             {id:101,name:"Mitul",pass:"123hsd"},
//             {id:102,name:"Daksh",pass:"334fdg"},
//             {id:103,name:"Paras",pass:"3433dc"}
//         ],
//         isLoggedIn: false
//     }
//     render() {
//         const newUser = this.state.user.map((u) => {
//             return <h2 key={u.id}>ID: {u.id}, Name: {u.name}, Pass : {u.pass}</h2>
//         })
//         return (
//             <div>
//                 {newUser}
//             </div>
//         );
//     }
// }
//
// export default App;


import React, {Component} from 'react';
import User from "../../../pro 9/proex9/src/User";

class App extends Component {
    render() {
        const newArr = this.props.arr
        const fArr = newArr.map((num) => <User key={num} val={num}/>)
        return (
            <ul>
                {fArr}
            </ul>
        );
    }
}

export default App;