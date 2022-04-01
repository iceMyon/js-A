const graph = require('./graph')

const visited = new Set()
const dfs = (n) => {  
  console.log(n)
  visited.add(n)
  graph[n].forEach(n =>{
    if(!visited.has(n)){
      dfs(n)
    }
  })
}
dfs(2)