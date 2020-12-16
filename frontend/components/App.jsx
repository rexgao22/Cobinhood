import React from "react";
import HomePage from "./homepage/homepage";
import SignUpContainer from "./session/signup_container";
import LogInContainer from "./session/login_container";
import PortfolioContainer from "./portfolio/portfolio_container"
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "../components/nav_bar/nav_bar_container";
import AssetShow from "./asset_show_page/asset_show";
const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LogInContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} />
      <ProtectedRoute path="/portfolio" component={PortfolioContainer} />
      <ProtectedRoute path="/assets/:tickerSymbol" component={AssetShow} />
      <AuthRoute path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
