// your Bomb code here!
import React from 'react';

class Bomb extends React.Component{
  constructor(props){
    super();
    
    this.state={
      secondsLeft: props.initialCount
    }
  }
  
  render(){
    return (
      this.state.secondsLeft===0?'Boom!':
      <div>{this.state.secondsLeft} seconds left before I go boom!</div>
      );
  }
}
export default Bomb;