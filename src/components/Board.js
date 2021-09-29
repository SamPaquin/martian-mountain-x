import { BugsBunny } from "./Characters/BugsBunny";
import { Marvin } from "./Characters/Marvin.js";
import { Tweety } from "./Characters/Tweety.js";
import { TazDevil } from "./Characters/TazDevil.js";
import { Mountain } from "./Characters/Mountain";
import { CarrotFlag } from "./Characters/CarrotFlag";
import "./Board.css";

const Board = () => {
  const horizontalAxis = [1, 2, 3, 4, 5];
  const verticalAxis = [1, 2, 3, 4, 5];

  let board = [];

  for (let i = 1; i < 14; i++) {}

  let bugs = new BugsBunny("B", 1, 1);
  let marvin = new Marvin("M", 5, 5);
  let tweety = new Tweety("T", 1, 5);
  let taz = new TazDevil("D", 5, 1);
  let mountain = new Mountain("W", 3, 3);
  let carrotFlag1 = new CarrotFlag("C", 3, 1);
  let carrotFlag2 = new CarrotFlag("C", 3, 5);

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      if (
        bugs.getPositionX() === horizontalAxis[i] &&
        bugs.getPositionY() === verticalAxis[j]
      ) {
        board.push(<div className="tile">{bugs.getName()}</div>);
      } else if (
        marvin.getPositionX() === horizontalAxis[i] &&
        marvin.getPositionY() === verticalAxis[j]
      ) {
        board.push(<div className="tile">{marvin.getName()}</div>);
      } else if (
        tweety.getPositionX() === horizontalAxis[i] &&
        tweety.getPositionY() === verticalAxis[j]
      ) {
        board.push(<div className="tile">{tweety.getName()}</div>);
      } else if (
        taz.getPositionX() === horizontalAxis[i] &&
        taz.getPositionY() === verticalAxis[j]
      ) {
        board.push(<div className="tile">{taz.getName()}</div>);
      } else if (
        mountain.getPositionX() === horizontalAxis[i] &&
        mountain.getPositionY() === verticalAxis[j]
      ) {
        board.push(<div className="tile">{mountain.getName()}</div>);
      } else if (
        carrotFlag1.getPositionX() === horizontalAxis[i] &&
        carrotFlag1.getPositionY() === verticalAxis[j]
      ) {
        board.push(<div className="tile">{carrotFlag1.getName()}</div>);
      } else if (
        carrotFlag2.getPositionX() === horizontalAxis[i] &&
        carrotFlag2.getPositionY() === verticalAxis[j]
      ) {
        board.push(<div className="tile">{carrotFlag2.getName()}</div>);
      } else {
        board.push(<div className="tile"></div>);
      }
    }
  }

  // Click next turn and again display board but with changed positions

  // Click next turn and again display board

  return <div className="board">{board}</div>;
};

export default Board;
