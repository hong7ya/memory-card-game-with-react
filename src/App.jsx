import { useState } from "react";
import CardList from "./components/CardList";
import image1Url from "./assets/infinite-challenge-1.jpg";
import image2Url from "./assets/infinite-challenge-2.jpg";
import image3Url from "./assets/infinite-challenge-3.jpg";
import image4Url from "./assets/infinite-challenge-4.jpg";
import image5Url from "./assets/infinite-challenge-5.jpg";
import image6Url from "./assets/infinite-challenge-6.jpg";
import TextButton from "./components/TextButton";

const IMAGES = [image1Url, image2Url, image3Url, image4Url, image5Url, image6Url];

function randomize(array){
  const randomized = [];
  for (let i = 0 ; i < array.length ; i += 1) {
    let randomNumber = Math.floor(Math.random() * 12);
    while (randomized[randomNumber]) {
      randomNumber = Math.floor(Math.random() * 12);
    }
    randomized[randomNumber] = array[i];
  }
  return randomized;
}

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
    setTimeout(()=>{
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

  return (
    <div className="flex flex-col gap-y-3 items-center">
      {cards.every((card) => card.status === "fixed") && <div className="text-2xl text-teal-400">GAME END 🏆</div>}
      <TextButton onClick={() => setCards(reset())}>RESET</TextButton>
      <CardList cards={cards} onPlay={handlePlay} />
    </div>
  );
}

export default App;
