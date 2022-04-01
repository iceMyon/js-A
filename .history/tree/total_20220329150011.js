const bt = require('./bt')
//上班划水，默写一下ldr dlr lrd 的遍历

console.log('前序遍历=======')
const ldr = (root) => {
  if(!root) return
  const stack = [root]
  while(stack.length){
    const n = stack.pop()
    console.log(n.val)
    if(n.right) stack.push(n.right)
    if(n.left) stack.push(n.left)
  }
}
ldr(bt)

console.log('中序遍历=======')
const dlr = (root) => {
  if(!root) return
  const stack = []
  let p = root
  while(stack.length || p){
    while(p){ 
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  }
}
dlr(bt)

console.log('后序遍历=======')
const lrd = (root) => { 
  
 }
lrd(bt)