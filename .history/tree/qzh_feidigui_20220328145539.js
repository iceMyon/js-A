const bt = require('./bt')

// const pre_order = (root) => {
//   if (!root) return
//   const stack = []

//   while (stack.length) {
//     const n = stack.pop()
//     console.log(n.val)
//     //后进先出
//     if (n.right) stack.push(n.right)
//     if (n.left) stack.push(n.left)
//   }


//   console.log(root.val)
//   pre_order(root.left)
//   pre_order(root.right)
// }

// pre_order(bt)


//节点的左子树遍历完毕，到再去遍历右子树的时候，才输出
const in_order = (root) => {
  if (!root) return
  const stack = []
  let p = root

  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()  //弹出遍历完左子树的节点，输出
    console.log(n.val) 
    p = n.right
  }
}

in_order(bt)

const post_order = (root) => {
  
}