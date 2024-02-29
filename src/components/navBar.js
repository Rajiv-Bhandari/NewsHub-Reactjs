import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [liveTime, setLiveTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Update live time every second
    const liveTimeUpdater = setInterval(() => {
      setLiveTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(liveTimeUpdater);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" exact>
            NewsHub
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/business">
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entertainment">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/health">
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/science">
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sports">
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/technology">
                  Technology
                </NavLink>
              </li>
            </ul>
            <div
              className="navbar-text"
              style={{ color: "#28a745", fontWeight: "bold" }}
            >
              Live Time: {liveTime}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
