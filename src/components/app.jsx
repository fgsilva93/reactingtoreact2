import React from 'react'; 
import { Component } from 'react';

// let App = (props) => {
//     return (
//         <div>
//             {/* <h1>Hello</h1> */}
//             <h1>Hello, {props.text}</h1>
//         </div>
//     )
// }

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: " ",
            text2: "something",
            hasLoaded: false,
        }

        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this); // makes the button print out the console log
    }

    handleInputChange(value) {
        // this.setState( {text: value} ) //add or change words in the input when parameter is value
        // if(this.state.hasLoaded === true) {
        //     this.setState( {text: event.target.value } )
        // }
        // else {
        //     this.setState({loading: event.target.value} )
        // } 
        this.setState( {text: value} )
        
    }

    handleClick() {
        // console.log(this.state.hasLoaded); //console log false when button clicked
        this.setState( { hasLoaded : !this.state.hasLoaded } )
     }

     componentDidMount() {
        // this.setState( { hasLoaded : !this.state.hasLoaded } )
     }

    render() {
        if(this.state.hasLoaded === false) {
            return (
                <div>
                 <h1>Loading</h1>
                <button onClick={ ()=> this.handleClick() }>Button!</button>
                </div>
            )
        }
        else {
            return (
                <React.Fragment>
                <h1>Hello {this.props.text}</h1>
                <input
                placeholder = { this.state.text2}
                value = {this.state.text}
                onChange = { (event) => { this.handleInputChange(event.target.value) } }
                />
                <button onClick= {this.handleClick}>Button!</button>
                </React.Fragment>
                )
        }
    }
}

export default App;