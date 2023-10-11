//import React from 'react'
import React,{ Component } from "react";
/*const Body = () => {
  return (
    <table border="2" width="400">
    <h4>RegistrationForm</h4>
    <tr>
      <td><label>Name</label></td>
      <td><input type="text" name="d1"></input></td>
    </tr>
    <tr>
      <td><label>RNO</label></td>
      <td><input type="text" name="d2"></input></td>
    </tr>
    <tr>
      <td><label>Date</label></td>
      <td><input type="date" name="d3"></input></td>
    </tr>
    </table>
  )*/
//import './css/Body.css';
class Body extends Component {
  constructor(){
    super();
    this.state={count:0,};
    
  }
  increment = () => {
    this.setState((prevState) => ({
      count:prevState.count+1}));
  };
  decrement = ()=>{
    this.setState((prevState) => ({
      count:prevState.count - 1}));
    };
  render(){
    return(
      <div align="center" style={{backgroundColor:'ivory',fontFamily:"monospace"}}>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button type='click' onClick={this.increment}>Increment</button><br></br>
        <br></br>
        <button type='click' onClick={this.decrement}>Decrement</button>
      </div>
    );
}
}

export default Body