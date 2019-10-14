import React, { Component } from "react";
import Toggle from "./ToggleRPC";
import Portal from "./portal";

export default class TogglePortal extends Component {
  render() {
    return (
      <div>
        <Toggle>
          {({ on, click, rajesh }: any) => (
            <div>
              {on && <h1>:)</h1>}
              <button onClick={click}>{rajesh}</button>
            </div>
          )}
        </Toggle>
        <Portal>
          <h1>I am portal</h1>
        </Portal>
      </div>
    );
  }
}
