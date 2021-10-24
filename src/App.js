import React, { useState, useEffect } from "react";
import TOC from "./TOC";
import Details from "./Details";
function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState({});

  const fetchFilms = async () => {
    setIsLoading(true);
    setError(null);
    //try {
    const res = await fetch("https://swapi.dev/api/films");
    if (!res.ok) {
      throw new Error("something went wrong");
    }
    const { results } = await res.json();
    const loadedFilms = [];
    for (const movie in results) {
      let title = results[movie].title;
      let abstract = results[movie].opening_crawl;
      loadedFilms.push({
        title,
        abstract,
      });
    }
    setFilms(loadedFilms);
    setSelected(loadedFilms[0]);
    //} catch (err) {
    //  setError(error.message);
    //}
    setIsLoading(false);
  };
  useEffect(() => {
    fetchFilms();
  }, []);

  function onCaptureClick(e) {
    let title = e.target.innerText;
    let abstract = films.find((film) => film.title === title).abstract;
    setSelected({ title, abstract });
  }

  return (
    <div className="App">
      {films.length > 0 ? (
        <>
          <TOC films={films} onCaptureClick={onCaptureClick} />
          <Details selected={selected} />
        </>
      ) : (
        "No results yet"
      )}
    </div>
  );
}

export default App;
