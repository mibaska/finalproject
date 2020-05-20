import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Calendar from "./pages/calendar";
import editVillager from "./pages/editVillager";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/editVillager" component={editVillager} />
    </Router>
  );
}
export default App;
