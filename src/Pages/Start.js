import { Link } from "react-router-dom";

import "./Start.css"

const Start = () => {
  return (
    <div className="start">
      <h1>Martian Mountain X</h1>
      <button>
        <Link to="/play">Let's Play!</Link>
      </button>
      <h2>Created by:</h2>
      <h2>Johny Chhantyal &amp; Sam Paquin</h2>
      <button>How to Play</button>
      <p>Repo Link</p>
    </div>
  );
};

export default Start;
