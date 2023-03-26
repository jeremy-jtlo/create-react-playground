import React, { Component } from "react";

export default class UlRender extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function (listValue) {
          return <li>{listValue}</li>;
        })}
      </ul>
    );
  }
}
