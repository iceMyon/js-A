function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var a = new TreeNode(1,b,c)
var b = new TreeNode(2)
var c = new TreeNode(3)
console.log(a)