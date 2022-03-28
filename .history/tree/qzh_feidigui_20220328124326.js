const bt = require('./bt')

const pre_order = (root) => {
  if(!root) return
  console.log(root.val)
  pre_order(root.left)
  pre_order(root.right)
}

pre_order(bt)