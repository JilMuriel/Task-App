import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import "./Side-menu.css";

export const SideMenuItem = ({ onActive, title, ...props }) => (
  <NavLink className="home__nav-item" {...props} activeClassName={onActive}>
    {title}
  </NavLink>
);

export const SideMenu = ({ title }) => {
  return (
    <>
      <Typography className="side-menu__title" variant="h5">
        {title}
      </Typography>
      <ul className="home__navigation">
        <li>
          <SideMenuItem
            title="My Day"
            to="/my-day"
            onActive="home__nav-item-active"
          />
        </li>
        <li>
          <SideMenuItem
            title="Important"
            to="/important"
            onActive="home__nav-item-active"
          />
        </li>
        <li>
          <SideMenuItem
            title="Planned"
            to="/planned"
            onActive="home__nav-item-active"
          />
        </li>
        <li>
          <SideMenuItem
            title="Assigned to you"
            to="/assigned"
            onActive="home__nav-item-active"
          />
        </li>
        <li>
          <SideMenuItem
            title="Task"
            to="/task"
            onActive="home__nav-item-active"
          />
        </li>
      </ul>
    </>
  );
};

export default SideMenu;