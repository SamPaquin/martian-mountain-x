import { useState } from "react";

const TurnCycle = () => {
  // Starting positions
  let [BugsPositionX, setBugsPositionX] = useState(1);
  let [BugsPositionY, setBugsPositionY] = useState(1);
  let [TweetyPositionX, setTweetyPositionX] = useState(1);
  let [TweetyPositionY, setTweetyPositionY] = useState(5);
  let [TazPositionX, setTazPositionX] = useState(5);
  let [TazPositionY, setTazPositionY] = useState(1);
  let [MarvinPositionX, setMarvinPositionX] = useState(5);
  let [MarvinPositionY, setMarvinPositionY] = useState(5);

  // Setting turn counters
  let [BugsTurnCounter, setBugsTurnCounter] = useState(1);
  let [TweetyTurnCounter, setTweetyTurnCounter] = useState(1);
  let [TazTurnCounter, setTazTurnCounter] = useState(1);
  let [MarvinTurnCounter, setMarvinTurnCounter] = useState(1);

  // Turn increment functions
  const incrementBugsTurnCounter = () =>
    setBugsTurnCounter(BugsTurnCounter + 1);
  const incrementTweetyTurnCounter = () =>
    setTweetyTurnCounter(TweetyTurnCounter + 1);
  const incrementTazTurnCounter = () => setTazTurnCounter(TazTurnCounter + 1);
  const incrementMarvinTurnCounter = () =>
    setMarvinTurnCounter(MarvinTurnCounter + 1);

  const booleanMoveXY = Math.random() < 0.5; //Random boolean for all character movements

  // Character Movements
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

  // Logging positions to the console
  console.log("Bugs");
  console.log("Turn: " + BugsTurnCounter);
  console.log("Position: [" + BugsPositionX, BugsPositionY + "]");

  console.log("Tweety");
  console.log("Turn: " + TweetyTurnCounter);
  console.log("Position: [" + TweetyPositionX, TweetyPositionY + "]");

  console.log("Taz");
  console.log("Turn: " + TazTurnCounter);
  console.log("Position: [" + TazPositionX, TazPositionY + "]");

  console.log("Marvin");
  console.log("Turn: " + MarvinTurnCounter);
  console.log("Position: [" + MarvinPositionX, MarvinPositionY + "]");

  // Generating Accurate Turn Button with onClick event listener
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

  // End of cycle functions
  if (MarvinTurnCounter === 3) {
    setBugsTurnCounter(BugsTurnCounter - 2);
    setTweetyTurnCounter(TweetyTurnCounter - 2);
    setTazTurnCounter(TazTurnCounter - 2);
    setMarvinTurnCounter(MarvinTurnCounter - 2);
  }

  return (
    <div className="turns">
      <TurnButton />
    </div>
  );
};

export default TurnCycle;
