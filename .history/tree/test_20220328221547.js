const bt = require('./bt')

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
var b = new TreeNode(2)
var c = new TreeNode(3)
var a = new TreeNode(1,b,c)

console.log(a)

console.log(bt)
console.log((String(1)))