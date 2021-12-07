import { useState } from "react";

import Bugs_NoCarrot from "../images/Bugs_NoCarrot.png";
import Bugs_Flag from "../images/Bugs_Flag.png";
import Flag from "../images/Flag.png";
import Marvin_NoCarrot from "../images/Marvin_NoCarrot.png";
import Marvin_Flag from "../images/Marvin_Flag.png";
import Mountain from "../images/Mountain.png";
import Taz_NoCarrot from "../images/Taz_NoCarrot.png";
import Taz_Flag from "../images/Taz_Flag.png";
import Tweety_NoCarrot from "../images/Tweety_NoCarrot.png";
import Tweety_Flag from "../images/Tweety_Flag.png";

import "./Styles/Game.css";

const Game = () => {
  // Starting Character Positions
  let [BugsPositionX, setBugsPositionX] = useState(1);
  let [BugsPositionY, setBugsPositionY] = useState(1);
  let [TweetyPositionX, setTweetyPositionX] = useState(1);
  let [TweetyPositionY, setTweetyPositionY] = useState(5);
  let [TazPositionX, setTazPositionX] = useState(5);
  let [TazPositionY, setTazPositionY] = useState(1);
  let [MarvinPositionX, setMarvinPositionX] = useState(5);
  let [MarvinPositionY, setMarvinPositionY] = useState(5);

  // Starting Carrot and Mountain Positions
  let [MountainPositionX, setMountainPositionX] = useState(3);
  let [MountianPositionY, setMountainPositionY] = useState(3);
  let [Carrot1PositionX, setCarrot1PositionX] = useState(3);
  let [Carrot1PositionY, setCarrot1PositionY] = useState(1);
  let [Carrot2PositionX, setCarrot2PositionX] = useState(3);
  let [Carrot2PositionY, setCarrot2PositionY] = useState(5);

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

  // These will be used to know if character has carrot. They are set to true if they land on a grid with carrot
  let [BugsHasCarrot, setBugsHasCarrot] = useState(false);
  let [TazHasCarrot, setTazHasCarrot] = useState(false);
  let [TweetyHasCarrot, setTweetyHasCarrot] = useState(false);
  let [MarvinHasCarrot, setMarvinHasCarrot] = useState(false);

  // These will be used to know if a character "died". They are set to true when they land on a same grid with Marvin.
  let [BugIsKilled, setBugIsKilled] = useState(false);
  let [TazIsKilled, setTazIsKilled] = useState(false);
  let [TweetyIsKilled, setTweetyIsKilled] = useState(false);

  // These can be used to announce winner. They are set to true when they land on mountain with a carrot
  let [BugsIsWinner, setBugIsWinner] = useState(false);
  let [TazIsWinner, setTazIsWinner] = useState(false);
  let [TweetyIsWinner, setTweetyIsWinner] = useState(false);
  let [MarvinIsWinner, setMarvinIsWinner] = useState(false);

  // Board
  let board = [];

  const booleanMoveXY = Math.random() < 0.5; //Random boolean for all character movements

  const BugMove = () => {
    if (booleanMoveXY === true && !BugIsKilled) {
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
    } else if (booleanMoveXY === false && !BugIsKilled) {
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

  const TweetyMove = () => {
    if (booleanMoveXY === true && !TweetyIsKilled) {
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
    } else if (booleanMoveXY === false && !TweetyIsKilled) {
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

  const TazMove = () => {
    if (booleanMoveXY === true && !TazIsKilled) {
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
    } else if (booleanMoveXY === false && !TazIsKilled) {
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

  const MarvinMove = () => {
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

  // check if any characters has carrot
  if (
    BugsPositionX === Carrot1PositionX &&
    BugsPositionY === Carrot1PositionY
  ) {
    setBugsHasCarrot(true);
    setCarrot1PositionX(0);
  } else if (
    BugsPositionX === Carrot2PositionX &&
    BugsPositionY === Carrot2PositionY
  ) {
    setBugsHasCarrot(true);
    setCarrot2PositionX(0);
  }

  if (
    TweetyPositionX === Carrot1PositionX &&
    TweetyPositionY === Carrot1PositionY
  ) {
    setTweetyHasCarrot(true);
    setCarrot1PositionX(0);
  } else if (
    TweetyPositionX === Carrot2PositionX &&
    TweetyPositionY === Carrot2PositionY
  ) {
    setTweetyHasCarrot(true);
    setCarrot2PositionX(0);
  }

  if (TazPositionX === Carrot1PositionX && TazPositionY === Carrot1PositionY) {
    setTazHasCarrot(true);
    setCarrot1PositionX(0);
  } else if (
    TazPositionX === Carrot2PositionX &&
    TazPositionY === Carrot2PositionY
  ) {
    setTazHasCarrot(true);
    setCarrot2PositionX(0);
  }

  if (
    MarvinPositionX === Carrot1PositionX &&
    MarvinPositionY === Carrot1PositionY
  ) {
    setMarvinHasCarrot(true);
    setCarrot1PositionX(0);
  } else if (
    MarvinPositionX === Carrot2PositionX &&
    MarvinPositionY === Carrot2PositionY
  ) {
    setMarvinHasCarrot(true);
    setCarrot2PositionX(0);
  }

  // Marvin steals carrot from others if they have it and land on same position with Marvin
  if (MarvinPositionX === TazPositionX && MarvinPositionY === TazPositionY) {
    if (TazHasCarrot && !MarvinHasCarrot) {
      setMarvinHasCarrot(true);
      setTazPositionX(0);
      setTazIsKilled(true);
    } else {
      setTazPositionX(0);
      setTazIsKilled(true);
    }
  } else if (
    MarvinPositionX === TweetyPositionX &&
    MarvinPositionY === TweetyPositionY
  ) {
    if (TweetyHasCarrot && !MarvinHasCarrot) {
      setMarvinHasCarrot(true);
      setTweetyPositionX(0);
      setTweetyIsKilled(true);
    } else {
      setTweetyPositionX(0);
      setTweetyIsKilled(true);
    }
  } else if (
    MarvinPositionX === BugsPositionX &&
    MarvinPositionY === BugsPositionY
  ) {
    if (BugsHasCarrot && !MarvinHasCarrot) {
      setMarvinHasCarrot(true);
      setBugsPositionX(0);
      setBugIsKilled(true);
    } else {
      setBugsPositionX(0);
      setBugIsKilled(true);
    }
  }

  // let no one step with one another
  if (BugsPositionX === TweetyPositionX && BugsPositionY === TweetyPositionY) {
    BugMove();
  } else if (BugsPositionX === TazPositionX && BugsPositionY === TazPositionY) {
    TazMove();
  } else if (
    TweetyPositionX === TazPositionX &&
    TweetyPositionY === TazPositionY
  ) {
    TweetyMove();
  }

  // No character can step on mountain if they dont have a carrot, if they have carrot they win
  if (
    BugsPositionX === MountainPositionX &&
    BugsPositionY === MountianPositionY
  ) {
    if (BugsHasCarrot) {
      // Bug is winner
      setBugIsWinner(true);
      setMountainPositionX(0);
    } else {
      BugMove();
    }
  } else if (
    TweetyPositionX === MountainPositionX &&
    TweetyPositionY === MountianPositionY
  ) {
    if (TweetyHasCarrot) {
      // Tweety Wins
      setTweetyIsWinner(true);
      setMountainPositionX(0);
    } else {
      TweetyMove();
    }
  } else if (
    TazPositionX === MountainPositionX &&
    TazPositionY === MountianPositionY
  ) {
    if (TazHasCarrot) {
      // Taz wins
      setTazIsWinner(true);
      setMountainPositionX(0);
    } else {
      TazMove();
    }
  } else if (
    MarvinPositionX === MountainPositionX &&
    MarvinPositionY === MountianPositionY
  ) {
    if (MarvinHasCarrot) {
      // Marvin wins
      setMarvinIsWinner(true);
      setMountainPositionX(0);
    } else {
      MarvinMove();
    }
  }

  // Placing Players and Items on Board, setting empty tiles

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      if (
        BugsPositionX === horizontalAxis[i] &&
        BugsPositionY === verticalAxis[j]
      ) {
        if (!BugsHasCarrot) {
          board.push(
            <div className="tile">
              {
                <img
                  src={Bugs_NoCarrot}
                  alt="Bugs Bunny"
                  className="bugs-image"
                />
              }
            </div>
          );
        } else {
          if (!BugsIsWinner) {
            board.push(
              <div className="tile">
                {
                  <img
                    src={Bugs_Flag}
                    alt="Bugs Bunny has the Flag!"
                    className="bugs-flag-image"
                  />
                }
              </div>
            );
          } else {
            window.location.href = "bugs-wins";
            break;
          }
        }
      } else if (
        TweetyPositionX === horizontalAxis[i] &&
        TweetyPositionY === verticalAxis[j]
      ) {
        if (!TweetyHasCarrot) {
          board.push(
            <div className="tile">
              {
                <img
                  src={Tweety_NoCarrot}
                  alt="Tweety"
                  className="tweety-image"
                />
              }
            </div>
          );
        } else {
          if (!TweetyIsWinner) {
            board.push(
              <div className="tile">
                {
                  <img
                    src={Tweety_Flag}
                    alt="Tweety has the Flag!"
                    className="tweety-image"
                  />
                }
              </div>
            );
          } else {
            window.location.href = "taz-wins";
            break;
          }
        }
      } else if (
        TazPositionX === horizontalAxis[i] &&
        TazPositionY === verticalAxis[j]
      ) {
        if (!TazHasCarrot) {
          board.push(
            <div className="tile">
              {<img src={Taz_NoCarrot} alt="Taz" className="taz-image" />}
            </div>
          );
        } else {
          if (!TazIsWinner) {
            board.push(
              <div className="tile">
                {
                  <img
                    src={Taz_Flag}
                    alt="Taz has the Flag!"
                    className="taz-image"
                  />
                }
              </div>
            );
          } else {
            window.location.href = "taz-wins";
            break;
          }
        }
      } else if (
        MarvinPositionX === horizontalAxis[i] &&
        MarvinPositionY === verticalAxis[j]
      ) {
        if (!MarvinHasCarrot) {
          board.push(
            <div className="tile">
              {
                <img
                  src={Marvin_NoCarrot}
                  alt="Marvin Martian"
                  className="marvin-image"
                />
              }
            </div>
          );
        } else {
          if (!MarvinIsWinner) {
            board.push(
              <div className="tile">
                {
                  <img
                    src={Marvin_Flag}
                    alt="Marvin Martian has the Flag!"
                    className="marvin-image"
                  />
                }
              </div>
            );
          } else {
            window.location.href = "marvin-wins";
            break;
          }
        }
      } else if (
        MountainPositionX === horizontalAxis[i] &&
        MountianPositionY === verticalAxis[j]
      ) {
        board.push(
          <div className="tile">
            {<img src={Mountain} alt="Mountain" id="mountain-image" />}
          </div>
        );
      } else if (
        Carrot1PositionX === horizontalAxis[i] &&
        Carrot1PositionY === verticalAxis[j]
      ) {
        board.push(
          <div className="tile">
            {<img src={Flag} alt="Carrot Flag" className="flag-image" />}
          </div>
        );
      } else if (
        Carrot2PositionX === horizontalAxis[i] &&
        Carrot2PositionY === verticalAxis[j]
      ) {
        board.push(
          <div className="tile">
            {<img src={Flag} alt="Carrot Flag" className="flag-image" />}
          </div>
        );
      } else {
        board.push(<div className="tile">{}</div>);
      }
    }
  }

  // Turn Button Updating Turn Counters
  const TurnButton = () => {
    if (!BugIsKilled && !TazIsKilled && !TweetyIsKilled) {
      if (BugsTurnCounter > TweetyTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementTweetyTurnCounter();
              TweetyMove();
            }}
          >
            Tweety's Turn
          </button>
        );
      } else if (TweetyTurnCounter > TazTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementTazTurnCounter();
              TazMove();
            }}
          >
            Taz's Turn
          </button>
        );
      } else if (TazTurnCounter > MarvinTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementMarvinTurnCounter();
              MarvinMove();
            }}
          >
            Marvin's Turn
          </button>
        );
      } else {
        return (
          <button
            className="button"
            onClick={() => {
              incrementBugsTurnCounter();
              BugMove();
            }}
          >
            Bugs' Turn
          </button>
        );
      }
    } else if (!BugIsKilled && TweetyIsKilled && !TazIsKilled) {
      if (BugsTurnCounter > TazTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementTazTurnCounter();
              TazMove();
            }}
          >
            Taz's Turn
          </button>
        );
      } else if (TazTurnCounter > MarvinTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementMarvinTurnCounter();
              MarvinMove();
            }}
          >
            Marvin's Turn
          </button>
        );
      } else {
        return (
          <button
            className="button"
            onClick={() => {
              incrementBugsTurnCounter();
              BugMove();
            }}
          >
            Bug's Turn
          </button>
        );
      }
    } else if (BugIsKilled && !TweetyIsKilled && !TazIsKilled) {
      if (TweetyTurnCounter > TazTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementTazTurnCounter();
              TazMove();
            }}
          >
            Taz's Turn
          </button>
        );
      } else if (TazTurnCounter > MarvinTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementMarvinTurnCounter();
              MarvinMove();
            }}
          >
            Marvin's Turn
          </button>
        );
      } else {
        return (
          <button
            className="button"
            onClick={() => {
              incrementTweetyTurnCounter();
              TweetyMove();
            }}
          >
            Tweety's Turn
          </button>
        );
      }
    } else if (!BugIsKilled && !TweetyIsKilled && TazIsKilled) {
      if (BugsTurnCounter > TweetyTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementTweetyTurnCounter();
              TweetyMove();
            }}
          >
            Tweety's Turn
          </button>
        );
      } else if (TweetyTurnCounter > MarvinTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementMarvinTurnCounter();
              MarvinMove();
            }}
          >
            Marvin's Turn
          </button>
        );
      } else {
        return (
          <button
            className="button"
            onClick={() => {
              incrementBugsTurnCounter();
              BugMove();
            }}
          >
            Bug's Turn
          </button>
        );
      }
    } else if (!BugIsKilled && TweetyIsKilled && TazIsKilled) {
      if (BugsTurnCounter > MarvinTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementMarvinTurnCounter();
              MarvinMove();
            }}
          >
            Marvin's Turn
          </button>
        );
      } else {
        return (
          <button
            className="button"
            onClick={() => {
              incrementBugsTurnCounter();
              BugMove();
            }}
          >
            Bug's Turn
          </button>
        );
      }
    } else if (BugIsKilled && !TweetyIsKilled && TazIsKilled) {
      if (TweetyTurnCounter > MarvinTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementMarvinTurnCounter();
              MarvinMove();
            }}
          >
            Marvin's Turn
          </button>
        );
      } else {
        return (
          <button
            className="button"
            onClick={() => {
              incrementTweetyTurnCounter();
              TweetyMove();
            }}
          >
            Tweety's Turn
          </button>
        );
      }
    } else if (BugIsKilled && TweetyIsKilled && !TazIsKilled) {
      if (TazTurnCounter > MarvinTurnCounter) {
        return (
          <button
            className="button"
            onClick={() => {
              incrementMarvinTurnCounter();
              MarvinMove();
            }}
          >
            Marvin's Turn
          </button>
        );
      } else {
        return (
          <button
            className="button"
            onClick={() => {
              incrementTazTurnCounter();
              TazMove();
            }}
          >
            Taz's Turn
          </button>
        );
      }
    } else {
      // Marvin is the only one left
      return (
        <button
          onClick={() => {
            incrementMarvinTurnCounter();
            MarvinMove();
          }}
        >
          Marvin's Turn
        </button>
      );
    }
  };

  // End of 3 turn cycle functions
  if (MarvinTurnCounter === 3) {
    setBugsTurnCounter(BugsTurnCounter - 3);
    setTweetyTurnCounter(TweetyTurnCounter - 3);
    setTazTurnCounter(TazTurnCounter - 3);
    setMarvinTurnCounter(MarvinTurnCounter - 3);

    // Mounatin Moves
    setMountainPositionX(
      (MountainPositionX = Math.floor(Math.random() * (5 - 1 + 1) + 1))
    );
    setMountainPositionY(
      (MountianPositionY = Math.floor(Math.random() * (5 - 1 + 1) + 1))
    );

    if (
      MountainPositionX === Carrot1PositionX &&
      MountianPositionY === Carrot1PositionY
    ) {
      setMountainPositionX(
        (MountainPositionX = Math.floor(Math.random() * (5 - 1 + 1) + 1))
      );
      setMountainPositionY(
        (MountianPositionY = Math.floor(Math.random() * (5 - 1 + 1) + 1))
      );
    }

    if (
      MountainPositionX === Carrot2PositionX &&
      MountianPositionY === Carrot2PositionY
    ) {
      setMountainPositionX(
        (MountainPositionX = Math.floor(Math.random() * (5 - 1 + 1) + 1))
      );
      setMountainPositionY(
        (MountianPositionY = Math.floor(Math.random() * (5 - 1 + 1) + 1))
      );
    }
  }

  return (
    <div className="game">
      <div className="board">{board}</div>
      <TurnButton />
    </div>
  );
};

export default Game;
