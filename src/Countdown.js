import React, { Component } from 'react';
import Squares from './Squares';
import moment from 'moment';

class Countdown extends Component {
  constructor() {
    super()

    this.state = {
      twoDays: moment.duration({ days: 2, hours: 0, minutes: 0, seconds: 0 }),
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
    this.updateTime = this.updateTime.bind(this);
  }


  updateTime() {
    let newTime = this.state.twoDays.subtract(1, 'seconds');

    this.setState({
     days: newTime._data.days,
     hours: newTime._data.hours,
     minutes: newTime._data.minutes,
     seconds: newTime._data.seconds
    })
  }

  render() {
    setTimeout(function() {this.updateTime()}.bind(this), 1000);

    return (
      <div>
        <Squares  days={this.state.days}
                  hours={this.state.hours}
                  minutes={this.state.minutes}
                  seconds={this.state.seconds}
        />
      </div>
    );
  }
}

export default Countdown;
