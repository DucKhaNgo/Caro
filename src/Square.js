/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./App.css";

class Square extends React.Component {
  render() {
    let styles = {
      background: "#fff"
    };
    if (this.props.iscolor) {
      styles = {
        backgroundColor: "red"
      };
    }
    return (
      <button className="square" onClick={this.props.click} style={styles}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
