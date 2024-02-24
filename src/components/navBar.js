import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      liveTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    // Update live time every second
    this.liveTimeUpdater = setInterval(() => {
      this.setState({ liveTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.liveTimeUpdater);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsHub
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
              <div
                className="navbar-text"
                style={{ color: "#28a745", fontWeight: "bold" }}
              >
                Live Time: {this.state.liveTime}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
