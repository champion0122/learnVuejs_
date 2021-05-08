const app = new Vue({
  el: '#app',
  data: {
    isNull: false,
    books: [
    {
      id: 1,
      name: '《算法导论》',
      date: '2006-9',
      price: 85.00,
      count: 1
    },
    {
      id: 2,
      name: '《UNIX编程艺术》',
      date: '2006-2',
      price: 59.00,
      count: 1
    },
    {
      id: 3,
      name: '《编程珠玑》',
      date: '2008-10',
      price: 39.00,
      count: 1
    },
    {
      id: 4,
      name: '《代码大全》',
      date: '2006-3',
      price: 128.00,
      count: 1
    },
  ]
  },
  methods:{
    decrement(i){
      i.count--
    },
    increment(i){
      i.count++
    },
    removeClick(index){
      // console.log(index)
      this.books.splice(index,1)
      if(this.books.length===0)
      this.isNull = !this.isNull
    },
    // getFinalPrice(price){
    //   return '￥' + price.toFixed(2)
    // }
  },
  computed:{
    sumAll(){
      let summary = 0
      // for(let i in this.books)   //1.i为索引
      //   summary += this.books[i].price*this.books[i].count

      // for(let i of this.books)//2.i为数组/对象中的每个元素
      //   summary += i.price*i.count

      //reduce
      summary = this.books.reduce((p,n)=>p+(n.count*n.price),0)
        return summary
    }
  },
  filters: {
    //过滤器
    showPrice(price){
      return '￥' + price.toFixed(2)
    }
  }
})