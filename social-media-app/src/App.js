import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./component/login/Login";
import SignUp from "./component/signup/SignUp";
import Dashboard from "./pages/Dashboard";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/Actions/authActions";
import PrivateRoutes from "./component/PrivateRoute";
import { Provider } from "react-redux";
import store from "./redux/store";

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoutes exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Route exact path="/" component={Homepage} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
