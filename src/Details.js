import React from "react";

const Details = ({ selected, onSelectFavorite }) => {
  return (
    <div className="details">
      <h3>{selected.title}</h3>
      <p>{selected.abstract}</p>
      <button onClick={onSelectFavorite}>Favorite</button>
    </div>
  );
};

export default Details;
