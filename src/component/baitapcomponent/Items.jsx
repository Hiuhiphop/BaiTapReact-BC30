import React, { Component } from "react";

export default class Items extends Component {
  render() {
    return (
      <div className="items">
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="items-card">
              <div className="card-body pt-0 text-center">
                <div className="icon bg-primary">
                  <i className="bi bi-collection" />
                </div>
                <h2 className="items-title fw-bold fs-4">Fresh new layout</h2>
                <p className="items-content">
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </div>
            </div>

            <div className="items-card">
              <div className="icon bg-primary">
                <i className="bi bi-cloud-download" />
              </div>
              <h2 className="items-title fw-bold fs-4">Free to download</h2>
              <p className="items-content">
                As always, Start Bootstrap has a powerful collectin of free
                templates.
              </p>
            </div>

            <div className="items-card">
              <div className="icon bg-primary">
                <i className="bi bi-card-heading" />
              </div>
              <h2 className="items-title fw-bold fs-4">
                Jumbotron hero header
              </h2>
              <p className="items-content">
                The heroic part of this template is the jumbotron hero header!
              </p>
            </div>

            <div className="items-card">
              <div className="icon bg-primary">
                <i className="bi bi-bootstrap" />
              </div>
              <h2 className="items-title fw-bold fs-4">Feature boxes</h2>
              <p className="items-content">
                We've created some custom feature boxes using Bootstrap icons!
              </p>
            </div>

            <div className="items-card">
              <div className="icon bg-primary">
                <i className="bi bi-code" />
              </div>
              <h2 className="items-title fw-bold fs-4">Simple clean code</h2>
              <p className="items-content">
                We keep our dependencies up to date and squash bugs as they
                come!
              </p>
            </div>

            <div className="items-card">
              <div className="icon bg-primary">
                <i className="bi bi-patch-check" />
              </div>
              <h2 className="items-title fw-bold fs-4">A name you trust</h2>
              <p className="items-content">
                Start Bootstrap has been the leader in free Bootstrap templates
                since 2013!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
