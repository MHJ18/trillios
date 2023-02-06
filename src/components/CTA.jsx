import React from "react";
import { Link } from "react-router-dom";
import "./cta.scss";

const CTA = () => {
  return (
    <>
      <footer className="cta-">
        <div className="section">
          <h3>good news! we have 4 free rooms for your selected dates</h3>
          <Link to="flights" className="button">
            <span className="visible">book now</span>
            <span className="invisible">only 4 rooms left</span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default CTA;
