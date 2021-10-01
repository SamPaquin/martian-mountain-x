import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <p>Page not found!</p>
      <Link to="/start">
        <button>Back to HomePage</button>
      </Link>
    </div>
  );
};

export default NotFound;
