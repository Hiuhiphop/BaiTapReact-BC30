import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="container d-flex flex-column mt-5 p-5">
          <h3 className="banner-title">A warm welcome!</h3>
          <p className="fs-4">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <div>
            <button className="btn btn-primary fs-4">Call to action</button>
          </div>
        </div>
      </div>
    );
  }
}
