/* eslint-disable react/prop-types */
function Card({ status, imageUrl, onClick }) {
  return (
    <button disabled={status !== "closed"} onClick={onClick}>
      {status === "closed" ? <div>click!</div> : <img src={imageUrl} />}
    </button>
  );
}

export default Card;
