import { Route, Switch, Redirect } from "react-router-dom";

import Start from "./pages/Start";
import Play from "./pages/Play";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/start" />
        </Route>
        <Route path="/start" exact>
          <Start />
        </Route>
        <Route path="/play" exact>
          <Play />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
