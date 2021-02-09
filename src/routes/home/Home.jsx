import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useAuth } from "../../contexts/AuthContext";

import { Typography } from "@material-ui/core";
import AvatarCard from "../../components/avatar-card/AvatarCard";
import SideMenu from "../../components/side-menu/Side-menu";
import "./Home.css";
import DashboardContentLayout from "../../components/dashboard/Dashboard-content-layout";
import Todos from "../../components/todos/Todos";

//Icon
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export const Home = () => {
  let match = useRouteMatch();
  const { currentUser } = useAuth();
  return (
    <div>
      <Grid className="home" container>
        <Grid className="home__inner-left" item sm={3} xl={3}>
          <div className="home__header">
            <AvatarCard username="Jil Muriel" email={currentUser?.email} />
          </div>
          <div className="home__headline">
            <Typography variant="h4">What's up Jil!</Typography>
          </div>
          <div className="home__menu">
            <SideMenu title="My Categories" />
            <ul>
              <li>
                <Link to={`${match.url}/todo`}>Link 01</Link>
              </li>
            </ul>
          </div>
          <div className="home__form">
            <Box display="flex">
              <IconButton color="secondary">
                <AddCircleOutlineIcon />
              </IconButton>
              <InputBase
                placeholder="Add"
                inputProps={{ "aria-label": "naked" }}
              />
            </Box>
          </div>
        </Grid>
        <Grid className="home__inner-right" item sm={9} xl={9}>
          <Container>
            <Switch>
              <Route exact path={`${match.url}/`}>
                <h1>Hello</h1>
              </Route>
              <Route path={`${match.url}/todo`}>
                <h1>Hello todo</h1>
              </Route>
              <Route path="*">
                <h1>Page not found</h1>
              </Route>
              {/* <Route exact path="/">
                <DashboardContentLayout title="My Day" desc="My Day">
                  <Box
                    display="flex"
                    alignItems="center"
                    className="search__form"
                  >
                    <SearchIcon />
                    <InputBase
                      placeholder="Search..."
                      inputProps={{ "aria-label": "naked" }}
                    />
                  </Box>
                  <Todos />
                </DashboardContentLayout>
                <Box>
                  <div className="dashboard-title"></div>
                  <Typography variant="h6"></Typography>
                </Box>
              </Route> */}
            </Switch>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
