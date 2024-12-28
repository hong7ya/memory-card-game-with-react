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

export default randomize;