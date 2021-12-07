import { Route, Switch, Redirect } from "react-router-dom";

import Start from "./pages/Start";
import Play from "./pages/Play";
import BugsWins from "./pages/Win/BugsWins";
import TweetyWins from "./pages/Win/TweetyWins";
import TazWins from "./pages/Win/TazWins";
import MarvinWins from "./pages/Win/MarvinWins";
import NotFound from "./pages/NotFound";
import "./Sass/App.css";

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
