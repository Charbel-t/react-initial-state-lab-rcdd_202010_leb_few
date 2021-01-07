// your Bomb code here!
import React from 'react';

class Bomb extends React.Component{
  constructor(){
    super();
    
    this.state={
      currentSlideIndex :0
    }
  }
  
  render(){
    return (
      <h1>'I am on slide {this.state.currentSlideIndex}'</h1>
      );
  }
}
export default Bomb;