/* eslint-disable react/prop-types */
import Card from "./card";

function CardList({ cards, onPlay }) {
  function handleCardClick(index) {
    const cardStatus = cards[index].status;
    if (cardStatus !== "closed") {
      return;
    }

    const selectedCardCount = cards.filter((card) => card.status === "selected").length;
    if (selectedCardCount === 0 || selectedCardCount === 1) {
      const updatedCards = cards.map((card, cardIndex) => {
        if (cardIndex === index) {
          return {
            ...card,
            status: "selected",
          }
        }
        return card;
      })
      onPlay(updatedCards);
    }
  }

  return (
    <div className="grid gap-x-3 grid-cols-3 grid-rows-4 min-w-[430px] max-w-[480px] border border-orange-300">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            status={card.status}
            imageUrl={card.imageUrl}
            onClick={()=> handleCardClick(index)}
          />
        );
      })}
    </div>
  );
}

export default CardList;
