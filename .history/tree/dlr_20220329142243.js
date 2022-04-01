const bt = require('./bt');

//默写一下中序遍历
const dlr = (root) => {
  if(!root) return
  const stack = []
  let p = root
  while(stack.length || p) {
    while(p){ 
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  }
}
//忘记调用dlr了。。。。。
dlr(bt)