
function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    debugger

    if(i === stopValue){
      break;
    }
    array[i] = changeValue

  }
  return array;
}
