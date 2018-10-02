import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    // constructor() {
    //     super()
    //     this.name="Gaurav"
    // }
    render () {
        return (
            <div className='name'>
            <h1>HELLO</h1>
            <h2>{this.props.name}</h2>
            </div>

        )
    }
}

export default Hello;

