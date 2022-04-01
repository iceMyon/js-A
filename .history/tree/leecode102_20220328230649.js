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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if(!root) return[]
  const q = [[root,0]]   //如果索引是0 ，下一次循环[9,1] [20,1]正常走if判断
  const res = []          //如果索引写成1 or >1 , 下一次循环 [9,2][20,2] 两次判断都会
  while(q.length){        //查找res[2]是否存在，结果会push两个数组进res[]
    const [n,l] = q.shift() 
    if(!res[l]){
      console.log(l)
      res.push([n.val])
    }else {
      res[l].push(n.val)
    }
    if(n.left) q.push([n.left,l+1])
    if(n.right) q.push([n.right,l+1])
  }
  return res
};
