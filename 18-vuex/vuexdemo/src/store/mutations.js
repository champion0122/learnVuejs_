import {INCREMENT, DECREMENT, INCREMENTCOUNT} from '@/store/mutations-types'
export default {
  //methods
  [INCREMENT](state){
    state.counter++
  },
  [DECREMENT](state){
    state.counter--
  },
  [INCREMENTCOUNT](state, count){
    state.counter += count
    // console.log(count)
  }
}