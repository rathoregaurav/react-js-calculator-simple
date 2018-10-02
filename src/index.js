import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import ReactTable from "react-table";

// import Hello from './component/timetick.js'
// import Image from './component/comment.js'

// const users = [
//     {id: 1, name: 'A'},
//     {id: 2, name: 'B'},
//     {id: 3, name: 'C'},
//     {id: 4, name: 'D'},
//   ];

// class ClockTick extends React.Component {
//     // constructor(props){
//     //     super(props);
//     //     this.state = {date : new Date()};
//     // }


//     componentDidMount() {
//         this.timerID = setInterval(new Date(),
//           1000
//         );
//       }
    
//     //   componentWillUnmount() {
//     //     this.setState({ todayDate: new Date(Date.now())});
//     //   }
    
//     //   tick() {
//     //     this.setState({
//     //       date: new Date(Date.now())
//     //     });
//     //   }
      
//     render() {
//         return (
//             <div className="name">{this.timerID.toLocaleTimeString()}</div>
//         )
//     }
// }
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => <li>number * 2</li>);
// console.log(doubled);


// class ListArgs extends React.Component {
//     constructor(props){
//         super(props)
//         const num = props.number
//         this.double=num.map((a, index) => <li key={index}>{a*2}</li>)
//         this.state = {name: num}
//     }
//     render () {
//         console.log(this.double)
//         return (
//             <div>
//             <ul className="name">{this.double}</ul>
//             <ul className="name">{this.state.name}</ul>
//             </div>
//         );
//     }
// }

// function ActionLink() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }
  
//     return (
//       <a href="#" onClick={handleClick}>
//         Click me
//       </a>
//     );
//   }

// function GuestUser(props) {
//     return (
//         <h1>I am GuestUser</h1>
//     )
// }


// function LogedUser(props) {
//     alert(props.abc)
//     return (
//         <h1>I am LoggedUser</h1>
//     )
// }

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn:true};
//         this.handleClick = this.handleClick.bind(this);
//         this.id=10

//     }
//     handleClick(abc) {
//         console.log(abc)
//         // alert(abc)
//         LogedUser(abc)
//         // this.state.isToggleOn = !this.state.isToggleOn
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }));
//     }

//     render () {
//         return (
//             <button onClick={this.handleClick.bind(this,this.id)}>{this.state.isToggleOn ? 'ON':'OFF'}</button>
//         )
//     }
// }

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {input1:'Input: ' , result:'Result: '};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.value==='=') {
            this.calculate()
        }
        else if (event.target.value==='CE') {
            this.clearall()
        }

        else if (event.target.value==='C') {
            this.clear()
        }
        else {
            this.setState({input1: this.state.input1+event.target.value}, () => {
            // alert(this.state.input1)
            let valueResult = this.state.input1
            // valueResult = valueResult+event.target.value
            let valueLayout = <div className='b'>{valueResult}</div>
            ReactDOM.render(valueLayout, document.getElementById("root"));
            // event.preventDefault();
            }
            );
        }
    }

    calculate = () => {
        var EVAL_HARM = eval
        try {
            this.setState(
                {result: 'Result: '+(EVAL_HARM(this.state.input1))}
            )}
        catch(e) {
            this.setState({
                result:"Error"
               })
            }
        }

    clearall = () => {
        this.setState({input1:'Input: ', result:'Result: '}, ()=>{
            let valueResult = this.state.input1
            let valueLayout = <div className='b'>{valueResult}</div>
            ReactDOM.render(valueLayout, document.getElementById("root"));
        })
    }

    clear = () => {
        if (this.state.input1!=='Input: ') {
            this.setState({input1:this.state.input1.slice(0,-1), result:'Result: '}, () => {
                let valueResult = this.state.input1
                let valueLayout = <div className='b'>{valueResult}</div>
                ReactDOM.render(valueLayout, document.getElementById("root"));
            })
        }
    }

    handleSubmit(event) {

        this.state.result=eval(this.state.input1)
        alert(this.state.result)
        // alert("This is what you input"+this.state.value.toUpperCase());
        // const tableData = 
        // <table id="customers">
        // <thead>
        //   <tr>
        //     <th>Name</th>
        //     <th>Phone</th>
        //     <th>Email</th>
        //   </tr>
        // </thead>
        //   <tr>
        //     <td>{this.state.name}</td>
        //     <td>{this.state.phone}</td>
        //     <td>{this.state.email}</td>
        //   </tr>
        // </table>
        // alert()
        // const tableData = this.state.input1
        // ReactDOM.render(tableData, document.getElementById("root1"));
        // event.preventDefault();
    }

    // render() {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //         {/* <label>
    //             <input type='text' name={this.state.name} onChange={this.handleChange}></input>
    //         </label> */}
    //         <label>
    //             <input type='text' name='one' value='1' onChange={this.handleChange}></input>
    //         </label>
    //         <label>
    //             <input type='text' name="input2" value={this.state.input2} onChange={this.handleChange}></input>
    //         </label>
    //         <input type='submit' value='Submit'></input>
    //         </form>
    //     )
    // }

    render() {
        return (
        <div>
        
        <table className='btn-group' align="center"> 
            <tbody>
            <tr>
                <th><button type='button' name='one' value='1' onClick={this.handleChange}>1</button></th>
                <th><button type='button' name='two' value='2' onClick={this.handleChange}>2</button></th>
                <th><button type='button' name='three' value='3' onClick={this.handleChange}>3</button></th>
                <th><button type='button' name='plus' value='+' onClick={this.handleChange}>+</button></th>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <th><button type='button' name='four' value='4' onClick={this.handleChange}>4</button></th>
                <th><button type='button' name='five' value='5' onClick={this.handleChange}>5</button></th>
                <th><button type='button' name='six' value='6' onClick={this.handleChange}>6</button></th>
                <th><button type='button' name='minus' value='-' onClick={this.handleChange}>-</button></th>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <th><button type='button' name='seven' value='7' onClick={this.handleChange}>7</button></th>
                <th><button type='button' name='eight' value='8' onClick={this.handleChange}>8</button></th>
                <th><button type='button' name='nine' value='9' onClick={this.handleChange}>9</button></th>
                <th><button type='button' name='mul' value='*' onClick={this.handleChange}>*</button></th>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <th><button type='button' name='equal' value='=' onClick={this.handleChange}>=</button></th>
                <th><button type='button' name='divide' value='/' onClick={this.handleChange}>/</button></th>
                <th><button type='button' name='clearall' value='CE' onClick={this.handleChange}>CE</button></th>
                <th><button type='button' name='clear' value='C' onClick={this.handleChange}>C</button></th>
            </tr>
            </tbody>
            

        </table>
        <div className='b'>{this.state.result}</div>
        </div>
        )
    }
}

ReactDOM.render(<div className='b'>Input: </div>, document.getElementById("root"));
ReactDOM.render(<NameForm />, document.getElementById("root1"));
