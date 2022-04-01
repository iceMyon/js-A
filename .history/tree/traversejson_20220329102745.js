const json = {
  a: { b: { c: 1 } },
  d: [1, 2]
}

const dfs = (n) => {
  console.log(n)
  Object.keys(n).forEach(k=>{
    dfs(n[k])
  })
}


dfs(json) 