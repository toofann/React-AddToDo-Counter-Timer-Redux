import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decriment } from "../actionCreator/cunterActions";

class Cunter extends Component {
  handelIncrement = () => {
    this.props.incriment();
  };
  handelDecrement = () => {
    this.props.decriment();
  };
  render() {
    return (
      <div style={{ margin: "20px auto" }}>
        <h1>Cunter</h1>
        <h1>{this.props.cunter}</h1>
        <button onClick={this.handelIncrement}>increment</button>
        <button onClick={this.handelDecrement}>decrement</button>
        <hr></hr>
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
    incriment: () => {
      dispatch(increment());
    },
    decriment: () => {
      dispatch(decriment());
    }
  };
};
let mapStateToProps = state => {
  return {
    cunter: state.cunter
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cunter);
