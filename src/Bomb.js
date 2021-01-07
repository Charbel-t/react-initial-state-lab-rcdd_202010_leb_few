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
      'I am on slide <CURRENT_SLIDE>'
      );
  }
}
export default Bomb;