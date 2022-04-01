class MinHeap {
  constructor(){
    this.heap = [];
  }
  getParentIndex(){
    return ((i-1)/2) >> 1
  }
  shiftUp(index){

  }
  insert (value){
    this.heap.push(value)
    this.shiftUp(this.heap.length -1)
  }
}