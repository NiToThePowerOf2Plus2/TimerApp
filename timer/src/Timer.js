import { Component } from "react";
import "./style.css"

class Timer extends Component{
  constructor(){
    super()
    this.state = {
      sec : "00",
      min : "00",
      hr : "00",
      disabled : false,
      stopDisabled : true,
      inputDisabled : false
    }
    this.decrementSec = this.decrementSec.bind(this)
    this.decrementMin = this.decrementMin.bind(this)
    this.decrementHr = this.decrementHr.bind(this)
    this.handleSec = this.handleSec.bind(this)
    this.handleMin = this.handleMin.bind(this)
    this.handleHr = this.handleHr.bind(this)
    this.clicked = this.clicked.bind(this)
    this.stopClicked = this.stopClicked.bind(this)
  }


    
  // seconds
  stopSec
  handleSec(event){
    this.setState({
      sec : event.target.value
    })
  }
  decrementSec(){
    if(this.state.sec < 1 && this.state.min > 0){
      this.setState({
        sec : 59,
      })
    }
    if(this.state.sec > 0){
      this.setState({
        sec : this.state.sec - 1
      })
    }
  }
  //---------------------
  //minutes
  stopMin
  handleMin(event){
    this.setState({
      min : event.target.value
    })
  }
  decrementMin(){
    if(this.state.min < 1 && this.state.hr > 0){
      this.setState({
        min : 59,
      })
    }
    if(this.state.min > 0 && this.state.sec === 0){
      this.setState({
        min : this.state.min - 1
      })
    }
  }
  //----------------------
  //hours
  stopHr
  handleHr(event){
    this.setState({
      hr : event.target.value
    })
  }
  decrementHr(){
    if(this.state.hr < 1){
      clearInterval(this.stopHr)
      this.setState({
        disabled : false,
      })
    }
    
    if(this.state.hr > 0 && this.state.min === 0){ //by 1 hour and -- sec -> bug!
      this.setState({
        hr : this.state.hr - 1
      })
    }
          
  }
  //---------------------
      

          
      
          
  clicked(){
    if(document.getElementById("hrBox").value==="" && document.getElementById("secBox").value==="" && document.getElementById("minBox").value===""){
      alert("please enter time")
    }
    //not working : need to alert when time is over!
    if((this.state.hr === 0 || this.state.hr === "00") && (this.state.min === 0 || this.state.min === "00") && (this.state.sec === 0 || this.state.sec === "00")){
      alert("time stopped!")
    }
    else{
      this.setState({disabled : true, inputDisabled : true, stopDisabled : false})
      this.stopSec = setInterval(this.decrementSec,1000)
      this.stopMin = setInterval(this.decrementMin,1000)
      this.stopHr = setInterval(this.decrementHr,60000)
  }
  }
  stopClicked(){
    this.setState({
      hr : "00",
      min : "00",
      sec : "00",
      disabled : false,
      inputDisabled : false,
      stopDisabled : false
    })
    clearInterval(this.stopSec)
    clearInterval(this.stopMin)
    clearInterval(this.stopHr)
    document.getElementById("hrBox").value = ""
    document.getElementById("minBox").value = ""
    document.getElementById("secBox").value = ""
  }
  
  

  render(){
    return (
      <div id="main-container">
        <div id="text-container">
          <h1 id="text">{this.state.hr + " : " + this.state.min + " : " + this.state.sec}</h1>
        </div>

        <div id="input-container">
          <label className="label" for="hrBox">Hours</label>
          <input disabled={this.state.inputDisabled} id="hrBox" className="time" type="text" onChange={this.handleHr} ></input>
          <div id="empty1"></div>
          <label className="label" for="minBox">Minutes</label>
          <input disabled={this.state.inputDisabled} id="minBox" className="time" type="text" onChange={this.handleMin}></input>
          <div id="empty2"></div>
          <label className="label" for="secBox">Seconds</label>
          <input disabled={this.state.inputDisabled} id="secBox" className="time" type="text" onChange={this.handleSec}></input>
          
        </div>

        <div id="btn-container">
            <div id="start-btn-container">
              <button id="start-btn" onClick={this.clicked} style={this.state.disabled ? {backgroundColor:"gray"} : undefined} disabled={this.state.disabled}>start</button>
            </div>
            <div id="stop-btn-container">
              <button id="stop-btn" onClick={this.stopClicked} style={this.state.stopDisabled ? {backgroundColor:"gray"} : undefined} disabled={this.state.stopDisabled}>stop</button>
            </div>
            
        </div>
      </div>
    );
  }
}

export default Timer;
