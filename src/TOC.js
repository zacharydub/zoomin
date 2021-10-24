import React from "react";

const TOC = ({ films, onCaptureClick }) => {
  return (
    <div className="toc">
      <ul>
        {films.map((film) => (
          <li key={film.title}>
            <button onClick={onCaptureClick}>{film.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TOC;
