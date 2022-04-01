const bt = require('./bt')

const ldr = (root) => {
  if (!root) return
  const stack = []
  while (stack.length) {
    const n = stack.pop()
    console.log(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
}

ldr(bt)