import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import navbar from "../components/navbar";
import index from "../pages/index";

const AppRouter = () => {
  return (
    <>
      <Router>
        <navbar />
        <Routes>
          <Route exact path="/" component={index} />
          <Route
            exact
            path="/transport/flights/:fromId/:fromName/:toId/:toName/:depart/:returnDate/"
          />
          <Navigate to="/" />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
