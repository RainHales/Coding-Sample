import React, { useState } from "react";
import "./App.css";
import Display from './display.js'
import "bootstrap/dist/css/bootstrap.css";



class App extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      cars: []
    }
  }


  componentDidMount(){
    fetch("http://localhost:5000/cars", {mode: 'no-cors'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            cars: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    console.log(this.state.cars); 
  }

  render(){
    return(
      
      <Display cars={this.state.cars}/>
    )
  }
}

export default App



