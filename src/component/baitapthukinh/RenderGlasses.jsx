import React, { Component } from "react";

export default class RenderGlasses extends Component {
  render() {
    let {glasses, changeGlasses} = this.props
    return (
      <a
        id="glass"
        href=""
        onClick={() => {
          changeGlasses(glasses);
        }}
      >
        <img src={glasses.url} alt="" />
      </a>
    );
  }
}
