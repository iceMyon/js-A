Array.prototype.selectionSort = function () {
  let indexMin = 0
  for (let j = 0; j < this.length; j++) {
    if(this[j]< this[indexMin]){
      indexMin = j
    }
  }
  const temp = this[0]
  this[0] = this[indexMin]
  this[indexMin] = temp
  console.log(this)
}

const arr = [5, 4, 3, 2, 1]
arr.selectionSort()