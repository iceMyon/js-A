const bt = require('./bt')

const pre_order = (root) => {
  if(!root) return
  console.log(root.val)
  pre_order(root.left)
  pre_order(root.right)
}

pre_order(bt)
console.log("============================")






const in_order = (root) => {
  if(!root) return 
  in_order(root.left)
  console.log(root.val)
  in_order(root.right)
}

in_order(bt)
console.log("============================")






const post_order = (root) => {
  if (!root) { return; }
  post_order(root.left);
  post_order(root.right);
  console.log(root.val);
};

post_order(bt)
console.log("============================")