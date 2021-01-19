import React from "react";
import Box from "@material-ui/core/Box";
import "./Dashboard-content-layout.css";

export const DashboardContentLayout = ({ ...props }) => {
  const { title, desc } = props;
  return (
    <Box>
      <div className="dashboard__title">{title}</div>
      {desc ? (
        <div className="dashboard__desc">Wednesday, January 13, 2021</div>
      ) : null}
      <div className="dashboard__content">{props.children}</div>
    </Box>
  );
};

export default DashboardContentLayout;
