import Board from "../components/Board";
import Turns from "../components/Turns/Turns";

const Play = () => {
  return (
    <div>
      <button>How to Play</button>
      <Turns />
      <Board />
      <button>Quit</button>
    </div>
  );
};

export default Play;
