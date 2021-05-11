<template>
  <div>
    <input
      type="text"
      v-model="city"
      @keyup.enter="searchWeather"
      placeholder="请输入查询的天气"
    />
    <button @click="searchWeather">get</button>
    <p>
      <a href="javascript:void(0)" @click="changeCity('北京')">北京</a>
      <a href="javascript:void(0)" @click="changeCity('上海')">上海</a>
      <a href="javascript:void(0)" @click="changeCity('西安')">西安</a>
    </p>
    <ul>
      <li v-for="(item, num) in weatherList" :key="num" class="singleWeather">
        <div>
          <ul>
            <li><img :src="item.day_weather_pic" alt="" /></li>
            <li>{{ item.area }}</li>
            <li>{{ item.day_air_temperature }}</li>
            <li>{{ item.day_weather }}</li>
            <li>{{ item.day_wind_direction }}</li>
            <li>{{ item.day_wind_power }}</li>
            <li>{{ item.daytime }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { request } from "@/network/request.js"

export default {
  data() {
    return {
      city: "",
      weatherList: [],
    };
  },
  methods: {
    searchWeather() {
      request({
        url: this.city,
        params: {
          type: "get",
          page: 5,
        },
      }).then(
        (res) => {
          this.weatherList = res.data.result.dayList
          }
      );
    },
    changeCity(cityName){
      this.city = cityName
      this.searchWeather()
    }
  },
//   watch:{//监控li变化，将新增的值存入 sessionStorage 里
//   	weatherList:{
// 	  	 handler(items) {
// 	      Storage.save(items);
//         this.stuNum = 0        
//         for(let i of items){
//           if(i.student == true)
//             this.stuNum ++
//         }
// 	    },										//sessionStorage 里的数据将在页面关闭后删除
// 	  	deep:true							//深度监视，只要 items 有一点改变就会触发回调函数handler，可以在刷新后依然保持turnRed的状态
//   	}
// }
};
</script>

<style>
li {
  text-decoration: none; /*去掉前面的圆点*/
  list-style: none;
}
.singleWeather {
  float: left;
}
</style>