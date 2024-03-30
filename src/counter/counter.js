import React from "react";
import './counter.css';

class Counter extends React.Component{
    state= { count: 0 }
    
    incounter=()=>{this.setState({count: this.state.count+1})}

    decounter=()=>{ 
    
        if(this.state.count>0)
        {
        this.setState({count: this.state.count-1})
        }

         else 
        {
       alert('Sorry! you have reached the limit zero')
        }
    }
    
    render(){
      return(
  <div className="jd" >
    <h1>Counter App</h1>
    <h2>{this.state.count}</h2>
    <button onClick={this.incounter}>Increment</button>
    <button onClick={this.decounter}>Decrement</button>
  </div>
  )
     }
  }
  export default Counter;
  