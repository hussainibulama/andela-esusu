import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/oboarding/index";
import SideNav from "./components/dashboard/ui/sidebar";
const App=()=> {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users" render={(props)=><SideNav actives="users"/>} />
        <Route exact path="/viewusers" render={(props)=><SideNav actives="viewusers"/>} />
      </Switch>
  </Router>
  );
}

export default App;
