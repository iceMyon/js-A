const bt = require('./bt')

console.log("========先序遍历========")
const pre_order = (root) => {
  if(!root) return
  console.log(root.val)
  pre_order(root.left)
  pre_order(root.right)
}
pre_order(bt)


console.log("========中序遍历========")
const in_order = (root) => {
  if(!root) return 
  in_order(root.left)
  console.log(root.val)
  in_order(root.right)
}

in_order(bt)


console.log("========后序遍历========")
const post_order = (root) => {
  if (!root) { return; }
  post_order(root.left);
  post_order(root.right);
  console.log(root.val);
};
post_order(bt)
