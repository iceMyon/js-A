const bt = require('./bt')

const lrd = (root) => {
  if(!root) return
  const res = []
  const stack = [root]
  while(stack.length){
    const n = stack.pop()
    res.push(n)
    if(n.left) stack.push(n.left)
    if(n.right) stack.push(n.right)
  }
  while (res.length){
    const n = res.pop()
    console.log(n.val)
  }
}

lrd(bt)