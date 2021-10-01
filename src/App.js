import { Route, Switch, Redirect } from "react-router-dom";

import Start from "./pages/Start";
import Play from "./pages/Play";
import BugsWins from "./pages/BugsWins";
import TweetyWins from "./pages/TweetyWins";
import TazWins from "./pages/TazWins";
import MarvinWins from "./pages/MarvinWins";
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
        <Route path="/bugs-wins" exact>
          <BugsWins />
        </Route>
        <Route path="/tweety-wins" exact>
          <TweetyWins />
        </Route>
        <Route path="/taz-wins" exact>
          <TazWins />
        </Route>
        <Route path="/marvin-wins" exact>
          <MarvinWins />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
