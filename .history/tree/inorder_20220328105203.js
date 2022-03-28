const bt = require('./bt')

const inorder = (root) => {
  if(!root) return 
  inorder(root.left)
  console.log(root.bal)
  inorder(root.right)
}

inorder(bt)