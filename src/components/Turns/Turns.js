import { useState } from "react";

import "./Turns.css";

const Display = (props) => {
  return <label>{props.message}</label>;
};

const Turns = () => {
  let [BugsTurnCounter, setBugsTurnCounter] = useState(1);
  let [TweetyTurnCounter, setTweetyTurnCounter] = useState(1);
  let [TazTurnCounter, setTazTurnCounter] = useState(1);
  let [MarvinTurnCounter, setMarvinTurnCounter] = useState(1);

  const incrementBugsTurnCounter = () =>
    setBugsTurnCounter(BugsTurnCounter + 1);
  const incrementTweetyTurnCounter = () =>
    setTweetyTurnCounter(TweetyTurnCounter + 1);
  const incrementTazTurnCounter = () => setTazTurnCounter(TazTurnCounter + 1);
  const incrementMarvinTurnCounter = () =>
    setMarvinTurnCounter(MarvinTurnCounter + 1);

  const TurnButton = () => {
    if (BugsTurnCounter > TweetyTurnCounter) {
      return (
        <button onClick={incrementTweetyTurnCounter}>Tweety's Turn</button>
      );
    } else if (TweetyTurnCounter > TazTurnCounter) {
      return <button onClick={incrementTazTurnCounter}>Taz's Turn</button>;
    } else if (TazTurnCounter > MarvinTurnCounter) {
      return (
        <button onClick={incrementMarvinTurnCounter}>Marvin's Turn</button>
      );
    } else {
      return <button onClick={incrementBugsTurnCounter}>Bugs' Turn</button>;
    }
  };

  if (MarvinTurnCounter === 3) {
    /* Move Marvin */
    /* Move Mountain */
    setBugsTurnCounter(BugsTurnCounter - 2);
    setTweetyTurnCounter(TweetyTurnCounter - 2);
    setTazTurnCounter(TazTurnCounter - 2);
    setMarvinTurnCounter(MarvinTurnCounter - 2);
  }

  return (
    <div className="turns">
      <TurnButton />
      <Display message={"Bugs Bunny's Turn: " + BugsTurnCounter} />
      <Display message={"Tweety Bird's Turn: " + TweetyTurnCounter} />
      <Display message={"Taz Devil's Turn: " + TazTurnCounter} />
      <Display message={"Marvin Martian's Turn: " + MarvinTurnCounter} />
    </div>
  );
};

export default Turns;
