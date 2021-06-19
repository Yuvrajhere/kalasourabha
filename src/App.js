import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Event from "./Event";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:tag" exact>
            <Event />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
