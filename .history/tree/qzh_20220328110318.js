const bt = require('./bt')

const pre_order = (root) => {
  if(!root) return
  console.log(root.val)
  reorder(root.left)
  reorder(root.right)
}

pre_order(bt)

const in_order = (root) => {
  if(!root) return 
  in_order(root.left)
  console.log(root.val)
  in_order(root.right)
}

in_order(bt)

const post_order = (root) => {
  if (!root) { return; }
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
};

post_order(bt)