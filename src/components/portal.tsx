import { Component } from "react";
import ReactDOM from "react-dom";

export default class portal extends Component {
  el = document.createElement("div");
  portalRoot = document.getElementById("portal");
  constructor() {
    super({});
    this.el = document.createElement("div");
    this.portalRoot = document.getElementById("portal");
  }

  componentDidMount = () => {
    this.portalRoot && this.portalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    this.portalRoot && this.portalRoot.removeChild(this.el);
  };

  render() {
    const { children }: any = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
