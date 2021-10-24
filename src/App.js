import React, { useState, useEffect } from "react";

import TOC from "./TOC";
import Details from "./Details";

function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFilms = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("https://swapi.dev/api/films");
      if (!res.ok) {
        throw new Error("something went wrong");
      }

      const data = await res.json();
      const loadedFilms = [];
    } catch (err) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return (
    <div className="App">
      <TOC />
      <Details />
    </div>
  );
}

export default App;
