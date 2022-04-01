const bt = require('./bt')
//上班划水，默写一下ldr dlr lrd 的遍历

console.log('前序遍历=======')
const ldr = (root) => {
  if(!root) return
  stack = [root]
  while(stack.length){
    const n = stack.pop()
    console.log(n.val)
    //后进先出
    if(n.right) stack.push(n.right)
    if(n.left) stack.push(n.left)
  }
}
ldr (bt)