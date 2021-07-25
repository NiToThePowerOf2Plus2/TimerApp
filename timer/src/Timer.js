import { Component } from "react";


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
    
    if(this.state.hr > 0 && this.state.min === 0){
      this.setState({
        hr : this.state.hr - 1
      })
    }
          
  }
  //---------------------
      

          
      
          
  clicked(){
    if(document.getElementById("hrBox").value==="" && document.getElementById("secBox").value==="" && document.getElementById("minBox").value===""){
      alert("please enter time")
    }else{
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
  
  textStyle = {
    fontSize : "15px"
  }
  inputStyle = {
  }

  render(){
    return (
      <div  style={{
        margin : "0 auto",
        padding:"15px",
        width:"25rem",
        height:"30rem",
        backgroundColor:"grey",
        color:"white"

      }}>
        <div className="container" style={{
          height:"3rem",
          width:"15rem",
          backgroundColor:"black"
        }}>
          <h1 className="text-center">{this.state.hr + " : " + this.state.min + " : " + this.state.sec}</h1>
        </div>
        <div className="row" style={{
          margin:"30px 5px 30px 5px"
        }}>

          <label className="col-sm" for="hrBox" style={this.textStyle}>Hours</label>
          <input style={this.inputStyle} disabled={this.state.inputDisabled} className="col-sm" id="hrBox" type="text"  onChange={this.handleHr} ></input>
          <label className="col-sm" for="minBox" style={this.textStyle}>Minutes</label>
          <input style={this.inputStyle} disabled={this.state.inputDisabled} className="col-sm" id="minBox" type="text"  onChange={this.handleMin} ></input>
          <label className="col-sm" for="secBox" style={this.textStyle}>Seconds</label>
          <input style={this.inputStyle} disabled={this.state.inputDisabled} className="col-sm" id="secBox" type="text"  onChange={this.handleSec} ></input>
          

        </div>
        <div className="row">
            <div className="col-sm"></div>
            <button className="btn btn-primary col-sm" onClick={this.clicked} disabled={this.state.disabled}>start</button>
            <div className="col-sm"></div>
            <button className="btn btn-warning col-sm" onClick={this.stopClicked} disabled={this.state.stopDisabled}>stop</button>
            <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}

export default Timer;
