import React from "react";

const Details = ({ selected }) => {
  console.log(selected);
  return (
    <div className="details">
      <h3>{selected.title}</h3>
      <p>{selected.abstract}</p>
    </div>
  );
};

export default Details;
