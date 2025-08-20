import React, { useState } from 'react';
import './App.css';

/* Ejemplo de cartas por set */
const SET_CARDS = {
  "Base Set": ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"],
  "Jungle": ["Clefairy", "Rattata", "Snorlax"]
};

function App() {
  const [collection, setCollection] = useState([]); // cartas que tienes

  /* Simula abrir un booster pack */
  const openBooster = (setName) => {
    const cards = SET_CARDS[setName];
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    if (!collection.includes(randomCard)) {
      setCollection([...collection, randomCard]);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Mi colección de Pokémon TCG</h1>
      </header>

      <div className="booster-buttons">
        {Object.keys(SET_CARDS).map(setName => (
          <button key={setName} onClick={() => openBooster(setName)}>
            Abrir booster {setName}
          </button>
        ))}
      </div>

      {Object.keys(SET_CARDS).map(setName => (
        <div key={setName}>
          <h2>{setName}</h2>
          <div className="collection">
            {SET_CARDS[setName].map(card => (
              <div
                key={card}
                className={`card ${collection.includes(card) ? "" : "missing"}`}
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      ))}

      <footer style={{ marginTop: "2rem", textAlign: "center", color: "#888" }}>
        Cartas obtenidas: {collection.length}
      </footer>
    </div>
  );
}

export default App;
