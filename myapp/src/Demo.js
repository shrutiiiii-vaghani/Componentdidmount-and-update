

import React, { Component } from 'react'

  


 class Demo extends Component {

    constructor(){
        super();
        this.state={
            cnt:0
        }
      }
     plus(){
        this.setState({cnt:this.state.cnt + 1})
     } 

     componentDidMount(){
        console.log("hiiii");
     }
   
     componentDidUpdate(prevprops,prevstate){
        console.log("previous:", +prevstate.cnt);
        console.log("updtae:",+this.state.cnt);
       if(prevstate.cnt !== this.state.cnt){
        console.log("component is runnning");
       }

     }

  render() {
    return (
      <div>
        <h1>{this.state.cnt}</h1>
        <button onClick={this.plus.bind(this)}>+</button>
      </div>
    )
  }
}



















export default Demo;