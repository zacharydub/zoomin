import React from "react";

const TOC = ({ films }) => {
  function captureClick(e) {}
  return (
    <div className="toc">
      <ul>
        {films.map((film) => {
          <li>
            <button onClick={(e) => captureClick(e)}>{film.title}</button>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default TOC;
