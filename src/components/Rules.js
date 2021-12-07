import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";

import "./Styles/Rules.css";

const Rules = () => {
  return (
    <div className="rules-section">
      <h1>Martian Mountain X</h1>
      <h2>Game Rules</h2>
      <ol className="rules-list">
        <li className="rule">
          Bugs Bunny, Taz, Tweety, and Marvin are trying to win the race to the
          top of the mountain. In order to do so the players must grab a
          carrot-flag prior to landing on the mountain. The first character
          holding a carrot-flag that lands on a mountain wins the game!
        </li>
        <li className="rule">
          Each character will decide their moves randomly at the click of their
          turn button (below the game board). They can move to any adjacent
          square. If another player is occupying that square, except for Marvin
          the Martian, the character will continue checking adjacent squares
          randomly until one is found.
        </li>
        <li className="rule">
          Besides trying to find the carrot-flag and win the race, Marvin the
          Martian cheats! He is capable of eliminating other competitors and
          stealing their carrot-flag! If he lands on another character or
          another character lands on him, Marvin will elminate that character
          from the game.
        </li>
        <li className="rule">
          Also, in the attempt to decrease the chances of others to get to the
          top of the mountain, Marvin the Martian has some more tricks up his
          sleeve. Every 3 turn cycles, he activates the Martian Mountain X
          multi-dimensional time travel machine! Every time the machine is
          activated, the mountain changes location to a random position (any
          available/empty square).
        </li>
      </ol>
      <div className="rules-section-buttons">
        <ExternalLink href="https://github.com/SamPaquin/martian-mountain-x">
          <button>Source Code</button>
        </ExternalLink>
        <Link to="/start">
          <button>Quit</button>
        </Link>
      </div>
    </div>
  );
};

export default Rules;
