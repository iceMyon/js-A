const bt = require('./bt');

const preorder = (root) => {
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}