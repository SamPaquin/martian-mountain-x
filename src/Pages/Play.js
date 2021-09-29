import Board from "../components/Board";
import TurnCycle from "../components/TurnCycle";
import "./Play.css";

const Play = () => {
  return (
    <div className="play">
      <TurnCycle />
      <Board />
      <button>Quit</button>
    </div>
  );
};

export default Play;
