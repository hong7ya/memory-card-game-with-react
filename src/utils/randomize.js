function randomize(array){
  return array.toSorted(() => Math.random() - 0.5);
}

export default randomize;
