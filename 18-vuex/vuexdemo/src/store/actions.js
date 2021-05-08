import {INCREMENTCOUNT, ACTIONINCREMENTCOUNT} from '@/store/mutations-types'
export default{
  [ACTIONINCREMENTCOUNT](context, layout){
    return new Promise((resolve,reject) => {
      console.log('倒计时1s')
    setTimeout(() => {
      console.log('开始赋值')
      context.commit(INCREMENTCOUNT,layout)
      resolve('赋值完成')
    },1000)
    })
  }
}