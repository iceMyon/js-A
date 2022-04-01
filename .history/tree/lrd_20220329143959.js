const bt = require('./bt')

const lrd = (root) => {
  if (!root) return
  const stack = [root]
  const res = []
  while (stack.length) {
    const n = stack.pop()
    res.push(n)
    if (n.left) res.push(n.left)
    if (n.right) res.push(n.right)
  }
  while (res.length) {
    const n = res.pop()
    console.log(n.val)
  }
}
lrd(bt)