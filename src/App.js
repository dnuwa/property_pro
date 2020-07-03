import React from "react";
import "./App.css";
import { Router, Route } from "react-router-dom";
import history from './_helpers/history'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCertificate,
  faHome,
  faStreetView,
  faStar,
  faLocationArrow,
  faKey,
  faUser,
  faAd
} from "@fortawesome/free-solid-svg-icons";
import Adverts from "./components/Adverts";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostAd from "./components/PostAd";
import Advert from "./components/Advert";
import Notifications from "./components/Notifications";
import LoadingIndicator from "./components/LoadingIndicator";

library.add(
  fab,
  faCheckSquare,
  faCertificate,
  faHome,
  faStreetView,
  faStar,
  faLocationArrow,
  faKey,
  faUser,
  faAd,
);

const App = () => {
  return (
    <Router history={history}>
      <React.Fragment>
          <div className="App">
            <Header />
            <Notifications />
            <LoadingIndicator/>            
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Adverts />
                </React.Fragment>
              )}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/advertise" component={PostAd} />
            <Route path="/advert" component={Advert} />            
          </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
