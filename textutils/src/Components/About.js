// React Class Component.

import React, { Component } from 'react'
import './About.css';

export default class About extends Component 
{
  constructor(props) { 
    super(props); 
    this.state = { 
        count: 0, 
    }; 
} 

increment = () =>{ 
    this.setState((prevState)=>({ 
        count: prevState.count+1 
    })) 
} 

decrement = () =>{ 
    this.setState((prevState)=>({ 
        count: prevState.count-1 
    })) 
} 
  render() 
  {
    return (
      <div>
        <h3>The current count is : {this.state.count}</h3> 
        <button className='b1' onClick={this.increment}>Increase</button> 
        <button className='b2' onClick={this.decrement}>Decrease</button> 
      </div>
    )
  }
}
