Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    const temp = this[i]
    let j = i
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1]
      } else {
        break
      }
      j--
    }
    
    this[j] = temp
    console.log(this)
  }
  console.log(this)
}

const arr = [5, 4, 3, 2, 1]
const arr2 = [2, 4, 5, 3, 1]
arr.insertionSort()
arr2.insertionSort()
