const bt = require('./bt')

const in_order = (root) => {
  if(!root) return 
  in_order(root.left)
  console.log(root.val)
  in_order(root.right)
}

inorder(bt)