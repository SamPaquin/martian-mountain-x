import { Link } from "react-router-dom";

import Marvin_Carrot from "../../images/Marvin_Carrot.png";
import "./Styles/Win.css";

const MarvinWins = () => {
  return (
    <div className="victory-page">
      <h2>Marvin the Martian Wins!</h2>
      <img src={Marvin_Carrot} alt="Marvin Wins!" id="marvin-image"/>
      <Link to="/play">
        <button>Play Again!</button>
      </Link>
    </div>
  );
};

export default MarvinWins;