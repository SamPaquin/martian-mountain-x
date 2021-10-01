import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <h1>Martian Mountain X</h1>
      <Link to="/play">
        <button>Let's Play!</button>
      </Link>
      <h2>Created by:</h2>
      <h2>Johny Chhantyal &amp; Sam Paquin</h2>
      <ExternalLink href="https://github.com/SamPaquin/martian-mountain-x/tree/master/src">
        <button>GitHub Repo</button>
      </ExternalLink>
    </div>
  );
};

export default Start;
