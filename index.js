
function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    debugger
    array[i] = changeValue
    if(i === stopValue){
      break;
    }
  }
  return array;
}
