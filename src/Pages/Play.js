import Game from "../components/Game";
import Rules from "../components/Rules";
import "./Styles/Play.css";

const Play = () => {
  return (
    <div className="play">
      <Rules />
      <Game />
    </div>
  );
};

export default Play;
