import React, { Component } from "react";

class Parallax extends Component {

    // constructor (props) {
    //     super (props)
    // }
  render() {
    return (
      <div className={`${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
export default Parallax;
