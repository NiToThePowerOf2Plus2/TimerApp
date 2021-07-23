import { Component } from "react";

class Timer extends Component{
  constructor(){
    super()
    this.state = {
      time : 3,
      disabled : false
    }
    this.decrement = this.decrement.bind(this)
    this.clicked = this.clicked.bind(this)
  }
  stop
  decrement(){
    if(this.state.time < 1){
      clearInterval(this.stop)
      this.setState({
        disabled : false,
        time : 4
      })
    }
    if(this.state.time > 0){
      this.setState({
        time : this.state.time - 1
      })
    }
          
  }
  clicked(){
    this.setState({disabled : true})
    this.stop = setInterval(this.decrement,1000)
  }
  

  render(){
    return (
      <div>
        <h1>{this.state.time}</h1>
        <button onClick={this.clicked} disabled={this.state.disabled}>start</button>
      </div>
    );
  }
}

export default Timer;
