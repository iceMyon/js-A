Array.prototype.bubbleSort = function(){
  for(let j = 0; j < this.length-1;j++){
    console.log(this[j],this[j+1])
  }
}

const arr = [5,4,3,2,1]

arr.bubbleSort()