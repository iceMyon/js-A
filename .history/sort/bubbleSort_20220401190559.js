Array.prototype.bubbleSort = function(){
  for(let j = 0; j < this.length-1;j++){
    console.log(this[j],this[j+1])
    if(this[j]>this.[j+1]){
      const temp = this[j]
      this[j] = this[j+1]
      this[j+1] = temp
    }
  }
  console.log(this)
}

const arr = [5,4,3,2,1]
arr.bubbleSort()