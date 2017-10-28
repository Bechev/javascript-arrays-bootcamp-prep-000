var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var myArray=[element,...array]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(exampleArray, element){
  var array=[element,...exampleArray]
  return array
}
