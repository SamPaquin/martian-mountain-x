import { Link } from "react-router-dom";

import Bugs_Carrot from "../../images/Bugs_Carrot.png";
import "./Styles/Win.css";

const BugsWins = () => {
  return (
    <div className="victory-page">
      <h2>Bugs Bunny Wins!</h2>
      <img src={Bugs_Carrot} alt="Bugs Bunny Wins!" id="bugs-image"/>
      <Link to="/play">
        <button>Play Again!</button>
      </Link>
    </div>
  );
};

export default BugsWins;
