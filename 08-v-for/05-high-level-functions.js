//filter/map/reduce

const nums = [10,20,30,11,11113,555,22,33]
let newNums = []
//1.filter中的回调函数必须返回boolean值，返回true则会将n加入新数组中，返回false则会过滤
newNums = nums.filter(function(n){
  return n < 100
})

//2.map,对每个元素映射操作
let new2Nums = newNums.map(function(n){
  return n * 2
})
//console.log(new2Nums)

// 3.reduce,对数组中所有内容汇总
//reduce(function(preValue,n){ return 下一个preValue的值},preValue的初始值)
new2Nums.reduce(function(preValue , n){
  return n + preValue
},0)