<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>OAuth Links</h2>
    <ul>
      <li>
        <img class="" src="../assets/Connect_logo_4.png" v-on:click="onQQLoginClick">
      </li>
      <li>
        <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"></div>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    console.log('mounted')
    window.fbAsyncInit = function() {
      FB.init({
        appId: '162108417151159',
        cookie: true,
        xfbml: true,
        version: 'v2.9'
      });
      FB.AppEvents.logPageView();
      console.log('fbAsyncInit')
      // Get FB Login Status
      FB.getLoginStatus(response => {
        console.log('res', response)        // 這裡可以得到 fb 回傳的結果
      })
    };
  },
  methods: {
    onQQLoginClick: function() {

      console.log('onQQLoginClick')
      var A = window.open("https://graph.qq.com/oauth2.0/authorize", "TencentLogin",
        "width=450,height=320,menubar=0,scrollbars=1,resizable= 1, status = 1, titlebar = 0, toolbar = 0, location = 1");
    },
    onFBLoginClick: function() {

      console.log('onFBLoginClick')
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
