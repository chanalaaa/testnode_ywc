var evens = [2,4,6,8,10,12,14]
//var oods = evens.map((v) => {return v+1})
var oods = evens.map((v => v+1))
var nums = evens.map((v,i) => v + i)
var pairs = evens.map(v => ({even: v, ood: v + 1}))
console.log(pairs)