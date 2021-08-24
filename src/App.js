import React, { useState } from "react";
import "./Button.css";
import "./Card.css";
import genres from "./genres";
import shuffle from "./shuffle";

function App() {
  const [mixedGenres, setMixedGenres] = useState(null);

  function mixGenres() {
    shuffle(genres);
    setMixedGenres(genres.slice(0, 2));
  }

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex-grow-0 flex-shrink Card flex flex-col gap-10">
        <button className="Button" onClick={mixGenres}>
          MIX GENRES
        </button>
        {mixedGenres ? (
          <p className="text-center">{mixedGenres.join(" + ")}</p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
