class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(i) {
    return (i - 1) >> 1
  }
  swap(i1,i2){
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }
  shiftUp(index) {
    if(index) return   //如果要上移的顶点是堆顶，就不用在上移了
    const parentIndex = this.getParentIndex(index)
    if(this.heap[parentIndex] > this.heap[index]){
      this.swap(parentIndex,index)
      this.shiftUp(parentIndex)
    }
  }
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
}

const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)

console.log(h)