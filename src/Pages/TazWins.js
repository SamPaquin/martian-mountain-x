import { Link } from "react-router-dom";

import Taz_Carrot from "../images/Taz_Carrot.png";
import "./Wins.css";

const TazWins = () => {
  return (
    <div className="victory-page">
      <h2>Taz Wins!</h2>
      <img src={Taz_Carrot} alt="Taz Wins!" id="taz-image"/>
      <Link to="/play">
        <button>Play Again!</button>
      </Link>
    </div>
  );
};

export default TazWins;