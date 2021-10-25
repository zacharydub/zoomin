import React from "react";

const TOC = ({ films, onCaptureClick, favorites }) => {
  function mapListItems(array) {
    return array.map((item) => (
      <li key={item.title}>
        <button onClick={onCaptureClick}>{item.title}</button>
      </li>
    ));
  }

  return (
    <div className="toc">
      <ul>
        {/*{films.map((film) => (
          <li key={film.title}>
            <button onClick={onCaptureClick}>{film.title}</button>
          </li>
        ))}*/}
        {mapListItems(films)}
      </ul>
      <div className="favorites">
        <h3>Favorites</h3>
        <ul>{mapListItems(favorites)}</ul>
      </div>
    </div>
  );
};

export default TOC;
