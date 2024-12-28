import { useState } from "react";

import CardList from "./components/CardList";
import TextButton from "./components/TextButton";

import IMAGES from "./constants/images";
import randomize from "./utils/randomize";

function reset(){
  const CardImages = randomize([...IMAGES, ...IMAGES]);

  const cards = Array.from(Array(CardImages.length), (_, index) => {
    return {
      status: "closed",
      imageUrl: CardImages[index]
    }
  });

  return cards;
}

function waitForCardOpening(selectedCards) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(selectedCards);
    }, 1000);
  });
}

function App() {
  const [cards, setCards] = useState(() => reset());

  function handlePlay(updatedCards) {
    const selectedCards = updatedCards.filter((card) => card.status === "selected");

    setCards(updatedCards);

    if (selectedCards.length === 2) {
      waitForCardOpening(selectedCards).then((selectedCards) => {
        const [card1, card2] = selectedCards;
          setCards(updatedCards.map((card) => {
            if (card.status === "selected") {
              return {
                ...card,
                status: card1.imageUrl === card2.imageUrl ? "fixed" : "closed",
              }
            }
            return card;
          }));
      })
    }
  }

  const isGameEnd = cards.every((card) => card.status === "fixed");

  return (
    <div className="flex flex-col gap-y-3 items-center">
      {isGameEnd && <div className="text-2xl text-teal-400">GAME END 🏆</div>}
      <TextButton
        onClick={() => setCards(reset())}
        text="RESET"
      />
      <CardList
        cards={cards}
        onPlay={handlePlay}
      />
    </div>
  );
}

export default App;
