import React from "react";

const TOC = ({ films, onCaptureClick }) => {
  return (
    <div className="toc">
      <ul>
        {films.map((film) => (
          <li>
            <button onClick={(e) => onCaptureClick(e)}>{film.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TOC;
