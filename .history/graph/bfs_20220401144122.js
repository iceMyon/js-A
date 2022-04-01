const graph = require('./graph')

const bfs = (n) => {
  const visited = new Set()
  visited.add(n)
  const q = [n]

  while (q.length) {
    const n = q.shift()
    console.log(n)

    graph[n].forEach(c => {
      if (!visited.has(c)) q.push(c)
      visited.add(c)
    })
  }
}
bfs(2)


//有问题的代码
// while (q.length) {
//   const n = q.shift()
//   console.log(n)
//   visited.add(c) //如果这里添加，就不能保证已经在队列的节点都在set中
//   graph[n].forEach(c => { //上面那个只在出队的时候添加字典
//     if (!visited.has(c)) q.push(c)

//   })
// }