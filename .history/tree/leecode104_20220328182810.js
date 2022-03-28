/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let res = 0 
  const dfs = (n,l) => {
    if(!n) return
    res = Math.max(res,l)
    dfs(n.left,l+)
    dfs(n.right)
  }
  dfs(root,1)

}