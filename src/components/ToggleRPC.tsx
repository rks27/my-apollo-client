import React, { Component } from "react";

export default class Toggle extends Component<any> {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const { children }: any = this.props;
    return (
      <div>
        {children({
          on: this.state.on,
          click: this.toggle,
          rajesh: "brijesh"
        })}
        <p>I am from toggle componet, hi</p>
      </div>
    );
  }
}
