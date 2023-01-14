import React from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.facebook.com/Community-Scrap-Collector-105916102216652/"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img
                src={require("../../assets/images/reactlogo.png")}
                alt="..."
              />
            </div>
          </a>
          <a className="simple-text text-decoration-none" href="https://www.facebook.com/Community-Scrap-Collector-105916102216652/">
            CSC
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            return (
              <li
                className={
                  prop.upgrade
                    ? "active active-pro"
                    : activeRoute(prop.layout + prop.path)
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeclassname="active"
                >
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
