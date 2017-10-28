var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var myArray=[element,...array]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(exampleArray, element){
  exampleArray=[element,...exampleArray]
  return exampleArray
}
