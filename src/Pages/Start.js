import { Link } from "react-router-dom";

import Marvin from "../images/Marvin.png";
import "./Styles/Start.css";

const Start = () => {
  return (
    <div className="start-page">
      <div className="start-container">
        <div className="start-content">
          <h1>MARTIAN MOUNTAIN X</h1>
          <p className="start-content-text">
            Bugs Bunny, Tweety, and Taz all race to the top of Martian Mountain
            X! But watch out, Marvin the Martian is in the race too and he is
            playing dirty!
          </p>
          <p className="start-content-text">
            Get the carrot-flag and land on the mountain before anyone else does
            and your character wins!
          </p>
          <Link to="/play">
            <button>Let's Play!</button>
          </Link>
        </div>
        <img src={Marvin} alt="Marvin the Martian" />
      </div>
    </div>
  );
};

export default Start;
