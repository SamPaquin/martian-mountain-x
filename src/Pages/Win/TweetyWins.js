import { Link } from "react-router-dom";

import Tweety_Carrot from "../../images/Tweety_Carrot.png";
import "./Styles/Win.css";

const TweetyWins = () => {
  return (
    <div className="victory-page">
      <h2>Tweety Bird Wins!</h2>
      <img src={Tweety_Carrot} alt="Tweety Bird Wins!" id="tweety-image"/>
      <Link to="/play">
        <button>Play Again!</button>
      </Link>
    </div>
  );
};

export default TweetyWins;