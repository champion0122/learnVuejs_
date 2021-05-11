import axios from "axios";

export function request(config){
    const instance = axios.create({
      baseURL: 'http://42.193.98.133:3000',
      timeout: 5000
    })

    return instance(config)
}


// export function request(config){
//   return new Promise((resolve,reject) => {
//     const instance = axios.create({
//       baseURL: '',
//       timeout: 5000
//     })

//     instance(config)
//     .then(res => {
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err)
//     })
//   })
// }

// export function request(config ,success ,failure){
//   const instance = axios.create({
//     baseURL:'',
//     timeout: 5000
//   })

//   instance(config)
//   .then(res => {
//     success(res)
//   })
//   .catch(err => {
//     failure(err)
//   })
// }