import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../components/Header/Header";
import CarHireScreen from "../pages/CarHireScreen";
import FlightsScreen from "../pages/FlightsScreen";
import HotelsScreen from "../pages/HotelsScreen";
import IndexScreen from "../pages/IndexScreen";
import ResultsScreen from "../pages/ResultsScreen";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={IndexScreen} />
          <Route exact path="/flights" component={FlightsScreen} />
          <Route exact path="/hotels" component={HotelsScreen} />
          <Route exact path="/carhire" component={CarHireScreen} />
          <Route
            exact
            path="/transport/flights/:fromId/:fromName/:toId/:toName/:depart/:returnDate/"
            component={ResultsScreen}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
