import { Link } from "react-router-dom";

import Game from "../components/Game";
import "./Play.css";

const Play = () => {
  return (
    <div className="play">
      <Game />
      <Link to="/start"><button>Quit</button></Link>
    </div>
  );
};

export default Play;
