<template>
  <div class="hello">
    <button @click="loginClick">登陆</button>
    <input type="text" v-model="keyword" @keyup.enter="searchMusic">
    <h2>{{msg}}</h2>
    <ul>
      <li v-for="song,num in list" :key="num"><a href="#" @click="sendId(song.id)">{{song.name}}</a></li>
    </ul>
    <audio :src="musicUrl" controls autoplay></audio>
     </div>
</template>

<script>
import {request} from "@/network/request.js"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      keyword: '',
      list: [],
      musicUrl: ''
    }
  },
  methods: {
    loginClick() {
      request({
        url: '/login/cellphone',
        params:{
          phone: "18921685093",
          password: "Xyc980830",
        }
      }).then(res => console.log(res),
      err => {
        console.log(err)
      })
    },
    searchMusic(){
      request({
        url: '/cloudsearch',
        params: {
          keywords: this.keyword,
          limit: 30
        }
      }).then(res => {
        this.list = res.data.result.songs
        // console.log(res)
      })
    },
    sendId(id){
      this.musicUrl = 'https://music.163.com/song/media/outer/url?id='+id+'.mp3'
      // request({
      //   url: '/song/url',
      //   params: {
      //     id,
      //     br: 999000
      //   }
      // }).then(res => {
      //   this.musicUrl = res.data.data[0].url
      //   console.log(res)
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
</style>
