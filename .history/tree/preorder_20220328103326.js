const bt = require('./bt');

const reorder = (root) => {
  if(!root) return
  console.log(root.val)
  reorder(root.left)
  reorder(root.right)
}

reorder(bt)