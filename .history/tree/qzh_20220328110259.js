const bt = require('./bt')

const reorder = (root) => {
  if(!root) return
  console.log(root.val)
  reorder(root.left)
  reorder(root.right)
}

reorder(bt)

const in_order = (root) => {
  if(!root) return 
  in_order(root.left)
  console.log(root.val)
  in_order(root.right)
}

in_order(bt)

const postorder = (root) => {
  if (!root) { return; }
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
};

postorder(bt)