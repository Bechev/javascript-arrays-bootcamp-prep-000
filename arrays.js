var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var myArray=[element,...array]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array[1] = element
  return array
}
