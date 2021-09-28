import "./Board.css";

const horizontalAxis = ["1", "2", "3", "4", "5"];
const verticalAxis = ["1", "2", "3", "4", "5"];

const Board = () => {
  let board = [];

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      board.push(
        <div className="tile">
          [{horizontalAxis[i]},{verticalAxis[j]}]
        </div>
      );
    }
  }

  return (
    <div>
      <div className="board">{board}</div>
    </div>
  );
};

export default Board;
