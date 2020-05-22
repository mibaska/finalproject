import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Calendar from "./pages/calendar";
import editVillager from "./pages/editVillager";
import Detail from "./pages/Detail"

function App() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/editVillager" component={editVillager} />
        <Route exact path="/editVillager/:id" component={Detail} />
    </Router>
  );
}
export default App;
