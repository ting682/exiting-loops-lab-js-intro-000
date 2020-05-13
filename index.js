function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if(i === stopValue){
      break;
    }
    array.splice(i, 1, changeValue)
  }
  return array;
}
