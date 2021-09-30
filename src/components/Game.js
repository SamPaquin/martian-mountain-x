import { useState } from "react";

import Bugs_Carrot from "../images/Bugs_Carrot.png";
import Bugs_NoCarrot from "../images/Bugs_NoCarrot.png";
import Carrot from "../images/Carrot.png";
import Marvin_Carrot from "../images/Marvin_Carrot.png";
import Marvin_NoCarrot from "../images/Marvin_NoCarrot.png";
import Mountain from "../images/Mountain.png";
import Taz_Carrot from "../images/Taz_Carrot.png";
import Taz_NoCarrot from "../images/Taz_NoCarrot.png";
import Tweety_Carrot from "../images/Tweety_Carrot.png";
import Tweety_NoCarrot from "../images/Tweety_NoCarrot.png";

import "./Game.css";

const Game = () => {
  // Starting positions
  let [BugsPositionX, setBugsPositionX] = useState(1);
  let [BugsPositionY, setBugsPositionY] = useState(1);

  let [TweetyPositionX, setTweetyPositionX] = useState(1);
  let [TweetyPositionY, setTweetyPositionY] = useState(5);

  let [TazPositionX, setTazPositionX] = useState(5);
  let [TazPositionY, setTazPositionY] = useState(1);

  let [MarvinPositionX, setMarvinPositionX] = useState(5);
  let [MarvinPositionY, setMarvinPositionY] = useState(5);

  let [MountainPositionX, setMountainPositionX] = useState(3);
  let [MountianPositionY, setMountainPositionY] = useState(3);

  let [Carrot1PositionX] = useState(3);
  let [Carrot1PositionY] = useState(1);

  let [Carrot2PositionX] = useState(3);
  let [Carrot2PositionY] = useState(5);

  // Setting turn counters
  let [BugsTurnCounter, setBugsTurnCounter] = useState(0);
  let [TweetyTurnCounter, setTweetyTurnCounter] = useState(0);
  let [TazTurnCounter, setTazTurnCounter] = useState(0);
  let [MarvinTurnCounter, setMarvinTurnCounter] = useState(0);

  // Turn increment functions
  const incrementBugsTurnCounter = () =>
    setBugsTurnCounter(BugsTurnCounter + 1);
  const incrementTweetyTurnCounter = () =>
    setTweetyTurnCounter(TweetyTurnCounter + 1);
  const incrementTazTurnCounter = () => setTazTurnCounter(TazTurnCounter + 1);
  const incrementMarvinTurnCounter = () =>
    setMarvinTurnCounter(MarvinTurnCounter + 1);

  // Setting up Board
  const horizontalAxis = [1, 2, 3, 4, 5];
  const verticalAxis = [1, 2, 3, 4, 5];

  let board = [];

  // Placing Players and Items on Board, setting empty tiles

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      if (
        BugsPositionX === horizontalAxis[i] &&
        BugsPositionY === verticalAxis[j]
      ) {
        board.push(
          <div className="tile">
            {<img src={Bugs_NoCarrot} alt="Bugs Bunny" id="bugs-image" />}
          </div>
        );
      } else if (
        TweetyPositionX === horizontalAxis[i] &&
        TweetyPositionY === verticalAxis[j]
      ) {
        board.push(
          <div className="tile">
            {<img src={Tweety_NoCarrot} alt="Tweety" id="tweety-image" />}
          </div>
        );
      } else if (
        TazPositionX === horizontalAxis[i] &&
        TazPositionY === verticalAxis[j]
      ) {
        board.push(
          <div className="tile">{<img src={Taz_NoCarrot} alt="Taz" id="taz-image" />}</div>
        );
      } else if (
        MarvinPositionX === horizontalAxis[i] &&
        MarvinPositionY === verticalAxis[j]
      ) {
        board.push(
          <div className="tile">
            {<img src={Marvin_NoCarrot} alt="Marvin Martian" id="marvin-image" />}
          </div>
        );
      } else if (
        MountainPositionX === horizontalAxis[i] &&
        MountianPositionY === verticalAxis[j]
      ) {
        board.push(
          <div className="tile">{<img src={Mountain} alt="Mountain" id="mountain-image" />}</div>
        );
      } else if (
        Carrot1PositionX === horizontalAxis[i] &&
        Carrot1PositionY === verticalAxis[j]
      ) {
        board.push(
          <div className="tile">{<img src={Carrot} alt="Carrot" className="carrot-image" />}</div>
        );
      } else if (
        Carrot2PositionX === horizontalAxis[i] &&
        Carrot2PositionY === verticalAxis[j]
      ) {
        board.push(
          <div className="tile">{<img src={Carrot} alt="Carrot" className="carrot-image" />}</div>
        );
      } else {
        board.push(<div className="tile">{}</div>);
      }
    }
  }

  // Character Movements

  const booleanMoveXY = Math.random() < 0.5; //Random boolean for all character movements

  const BugsMovement = () => {
    if (booleanMoveXY === true) {
      if (BugsPositionX === 1) {
        setBugsPositionX(BugsPositionX + 1);
      } else if (BugsPositionX === 5) {
        setBugsPositionX(BugsPositionX - 1);
      } else {
        const booleanXPlusMinus = Math.random() < 0.5;

        if (booleanXPlusMinus === true) {
          setBugsPositionX(BugsPositionX + 1);
        } else if (booleanXPlusMinus === false) {
          setBugsPositionX(BugsPositionX - 1);
        }
      }
    } else if (booleanMoveXY === false) {
      if (BugsPositionY === 1) {
        setBugsPositionY(BugsPositionY + 1);
      } else if (BugsPositionY === 5) {
        setBugsPositionY(BugsPositionY - 1);
      } else {
        const booleanXPlusMinus = Math.random() < 0.5;

        if (booleanXPlusMinus === true) {
          setBugsPositionY(BugsPositionY + 1);
        } else if (booleanXPlusMinus === false) {
          setBugsPositionY(BugsPositionY - 1);
        }
      }
    }
  };

  const TweetyMovement = () => {
    if (booleanMoveXY === true) {
      if (TweetyPositionX === 1) {
        setTweetyPositionX(TweetyPositionX + 1);
      } else if (TweetyPositionX === 5) {
        setTweetyPositionX(TweetyPositionX - 1);
      } else {
        const booleanXPlusMinus = Math.random() < 0.5;

        if (booleanXPlusMinus === true) {
          setTweetyPositionX(TweetyPositionX + 1);
        } else if (booleanXPlusMinus === false) {
          setTweetyPositionX(TweetyPositionX - 1);
        }
      }
    } else if (booleanMoveXY === false) {
      if (TweetyPositionY === 1) {
        setTweetyPositionY(TweetyPositionY + 1);
      } else if (TweetyPositionY === 5) {
        setTweetyPositionY(TweetyPositionY - 1);
      } else {
        const booleanXPlusMinus = Math.random() < 0.5;

        if (booleanXPlusMinus === true) {
          setTweetyPositionY(TweetyPositionY + 1);
        } else if (booleanXPlusMinus === false) {
          setTweetyPositionY(TweetyPositionY - 1);
        }
      }
    }
  };

  const TazMovement = () => {
    if (booleanMoveXY === true) {
      if (TazPositionX === 1) {
        setTazPositionX(TazPositionX + 1);
      } else if (TazPositionX === 5) {
        setTazPositionX(TazPositionX - 1);
      } else {
        const booleanXPlusMinus = Math.random() < 0.5;

        if (booleanXPlusMinus === true) {
          setTazPositionX(TazPositionX + 1);
        } else if (booleanXPlusMinus === false) {
          setTazPositionX(TazPositionX - 1);
        }
      }
    } else if (booleanMoveXY === false) {
      if (TazPositionY === 1) {
        setTazPositionY(TazPositionY + 1);
      } else if (TazPositionY === 5) {
        setTazPositionY(TazPositionY - 1);
      } else {
        const booleanXPlusMinus = Math.random() < 0.5;

        if (booleanXPlusMinus === true) {
          setTazPositionY(TazPositionY + 1);
        } else if (booleanXPlusMinus === false) {
          setTazPositionY(TazPositionY - 1);
        }
      }
    }
  };

  const MarvinMovement = () => {
    if (booleanMoveXY === true) {
      if (MarvinPositionX === 1) {
        setMarvinPositionX(MarvinPositionX + 1);
      } else if (MarvinPositionX === 5) {
        setMarvinPositionX(MarvinPositionX - 1);
      } else {
        const booleanXPlusMinus = Math.random() < 0.5;

        if (booleanXPlusMinus === true) {
          setMarvinPositionX(MarvinPositionX + 1);
        } else if (booleanXPlusMinus === false) {
          setMarvinPositionX(MarvinPositionX - 1);
        }
      }
    } else if (booleanMoveXY === false) {
      if (MarvinPositionY === 1) {
        setMarvinPositionY(MarvinPositionY + 1);
      } else if (MarvinPositionY === 5) {
        setMarvinPositionY(MarvinPositionY - 1);
      } else {
        const booleanXPlusMinus = Math.random() < 0.5;

        if (booleanXPlusMinus === true) {
          setMarvinPositionY(MarvinPositionY + 1);
        } else if (booleanXPlusMinus === false) {
          setMarvinPositionY(MarvinPositionY - 1);
        }
      }
    }
  };

  // Turn Button Updating Turn Counters
  const TurnButton = () => {
    if (BugsTurnCounter > TweetyTurnCounter) {
      return (
        <button
          onClick={() => {
            incrementTweetyTurnCounter();
            TweetyMovement();
          }}
        >
          Tweety's Turn
        </button>
      );
    } else if (TweetyTurnCounter > TazTurnCounter) {
      return (
        <button
          onClick={() => {
            incrementTazTurnCounter();
            TazMovement();
          }}
        >
          Taz's Turn
        </button>
      );
    } else if (TazTurnCounter > MarvinTurnCounter) {
      return (
        <button
          onClick={() => {
            incrementMarvinTurnCounter();
            MarvinMovement();
          }}
        >
          Marvin's Turn
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            incrementBugsTurnCounter();
            BugsMovement();
          }}
        >
          Bugs' Turn
        </button>
      );
    }
  };

  // End of 3 turn cycle functions
  if (MarvinTurnCounter === 3) {
    setBugsTurnCounter(BugsTurnCounter - 2);
    setTweetyTurnCounter(TweetyTurnCounter - 2);
    setTazTurnCounter(TazTurnCounter - 2);
    setMarvinTurnCounter(MarvinTurnCounter - 2);

    // Mounatin Moves
    setMountainPositionX(MountainPositionX + 1);
    setMountainPositionY(MountianPositionY + 1);
  }

  console.log("Bugs: " + BugsTurnCounter);
  console.log("Tweety: " + TweetyTurnCounter);
  console.log("Taz: " + TazTurnCounter);
  console.log("Marvin: " + MarvinTurnCounter);

  return (
    <div className="game">
      <TurnButton />
      <div className="board">{board}</div>
    </div>
  );
};

export default Game;
