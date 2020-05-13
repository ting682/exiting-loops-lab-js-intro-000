function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {

    array.splice(i, 0, changeValue)
    if(i === stopValue){
      break;
    }
  }
  return array;
}
