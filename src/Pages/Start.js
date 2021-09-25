import { Link } from "react-router-dom";

import "./Start.css"

const Start = () => {
  return (
    <div className="start">
      <h1>Martian Mountain X</h1>
      <button>
        <Link to="/play">Start</Link>
      </button>
    </div>
  );
};

export default Start;
