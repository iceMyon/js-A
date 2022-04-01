Array.prototype.selectionSort = function () {
  let indexMin = 0
  for (let j = 0; j < this.length; j++) {
    if(this[j]< this[indexMin]){
      indexMin = j
    }
  }
  console.log(indexMin)
}

const arr = [5, 4, 3, 2, 1]
arr.selectionSort()