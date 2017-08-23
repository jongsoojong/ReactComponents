import React, { Component } from 'react';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        secondsElapsed: 45 * 60
     };
  }
    
  tick() {
    if(this.state.secondsElapsed !== 0) {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed - 1
    }));
    } else {
      //do nothing
    }
  }

  startWatch() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  stopWatch() {
    clearInterval(this.interval);
  }

  clearWatch() {
    this.setState({
        secondsElapsed: 45 * 60
    })
  }

  rest() {
      this.setState({
          secondsElapsed: 5 * 60
      })
    this.stopWatch();
    this.startWatch();
  }

  restLong() {
      this.setState({
          secondsElapsed: 15 * 60
      })
    this.stopWatch();   
    this.startWatch();
  }


  timeFormat(time) {
      let hours = Math.floor(time/3600);
      let minutes = Math.floor((time % 3600) / 60);
      let seconds = time % 60;

      let result = '';

      if(hours > 0) {
          result += '' + hours + ';' + (minutes < 10 ? "0" : '');
      }
    
      result += '' + minutes + ':' + (seconds < 10 ? '0' : '');
      result += '' + seconds;
      return result;
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
      return (
          <div>
              <h2>Pomodoro Timer</h2> 
              <p> { this.timeFormat(this.state.secondsElapsed) } </p>
              <button type="button" onClick={this.startWatch.bind(this)}> Start </button>
              <button type="button" onClick={this.stopWatch.bind(this)}> Stop </button>
              <button type="button" onClick={this.rest.bind(this)}> Rest </button>
              <button type="button" onClick={this.restLong.bind(this)}> Long Rest </button>
              <button type="button" onClick={this.clearWatch.bind(this)}> Restart </button>
        </div>
      );
  }
}

export default Pomodoro;
