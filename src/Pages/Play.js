import Game from "../components/Game";
import "./Play.css";

const Play = () => {
  return (
    <div className="play">
      <Game />
      <button>Quit</button>
    </div>
  );
};

export default Play;
