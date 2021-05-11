import axios from "axios";

export function request(config){
    const instance = axios.create({
      baseURL: 'https://api.apishop.net/common/weather/get15DaysWeatherByArea?apiKey=cBsHvK5872c20ee425a7300ef22c23177600b09d0a427c9&area=',
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