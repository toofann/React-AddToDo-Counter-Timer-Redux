import React, { Component } from "react";
import { connect } from "react-redux";
import { resetTimer, startTimer } from "../actionCreator/timerActions";

class Timer extends Component {
  state = {
    started: false
  };

  handelStart = () => {
    if (!this.interval)
      this.interval = setInterval(() => {
        this.props.startTimer();
      }, 1000);
    this.setState({ started: true });
  };

  handelStop = () => {
    clearInterval(this.interval);
    this.setState({ started: false });
    this.interval = null;
  };

  handelReset = () => {
    this.handelStop();
    this.props.resetTimer();
  };

  handelToggle = () => {
    if (!this.interval) {
      this.handelStart();
    } else {
      this.handelStop();
    }
  };

  render() {
    return (
      <div style={{ margin: "20px auto" }}>
        <h1>Timer</h1>
        <h1>{this.props.timer}</h1>
        <button onClick={this.handelStart}>start</button>
        <button onClick={this.handelStop}>stop</button>
        <button onClick={this.handelReset}>reset</button>
        <button onClick={this.handelToggle}>
          {this.state.started ? "toggle : stop" : "toggle : start"}
        </button>
        <hr></hr>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    timer: state.timer
  };
};

let mapDispatchToProps = dispatch => {
  return {
    startTimer: () => {
      // dispatch({type:START_TIMER})
      dispatch(startTimer());
    },
    resetTimer: () => {
      // dispatch({type:RESET_TIMER})
      dispatch(resetTimer());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
