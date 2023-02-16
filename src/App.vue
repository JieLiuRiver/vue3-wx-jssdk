<template>
  <h1>
    Hello Vue3 & WeiXin JS-SDK
    <br/>
    <button @click="handleClick()">click me </button>
  </h1>
</template>

<script>
import axios from 'axios';
const wxJssdkConfigUrl = `${process.env.VUE_APP_API_URL}/wx-jssdk-config`;

export default {
  name: 'App',
  components: {
  },
  mounted() {
    axios.get(wxJssdkConfigUrl, {
      params: {
        url: window.location.href,
      },
    }).then(response => {
      const { appId, timestamp, nonceStr, signature } = response.data;
      this.$wechat.config({
          debug: true,
          appId,
          timestamp,
          nonceStr,
          signature,
          jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
        })
        this.$wechat.ready(() => {
          console.log('wx-js-sdk is ready')
        })
    })
  },
  methods: {
    handleClick() {
        this.$wechat.updateAppMessageShareData({
          
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
