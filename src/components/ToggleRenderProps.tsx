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
    const { render } = this.props;
    return (
      <div>
        {this.state.on && <h2>hi 2</h2>}
        {render({ on: this.state.on, click: this.toggle, rajesh: "brijesh" })}
        <button onClick={this.toggle}>innerButton</button>
      </div>
    );
  }
}
