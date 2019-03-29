import React, { Component } from 'react';
import { carouselData } from '../../data' 
// Complete this Carousel 
export default class Carousel extends Component {
 
  
  constructor(props){
    super(props);
    this.state = {
      Images: [],
      index: 3
      
    }
  }
  componentDidMount(){
    this.setState({
      Images: carouselData
    })
  }

  leftClick = () => {
    this.setState({
      index: this.state.index < this.state.Images.length ? this.state.index + 1 : 0
    })
  }

  rightClick = () => {
    this.setState({
      index: this.state.index - 1
    })
  }

  selectedImage = () => {
    return <img 
    src={this.state.Images[this.state.index]} 
    style={{display: 'block'}} 
    
    />
  }
  
  render(){ 
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <this.selectedImage />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}