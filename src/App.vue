<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>info:{{info}}</div>
    <span>id:{{id}}</span>
    <div>
      <div id="fb-root"></div>
      <div class="fb-customerchat" attribution="setup_tool"  page_id="146864302897352"></div>
    
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      info: {},
      id: ""
    };
  },
  mounted() {
    let self = this;
    window.fbAsyncInit = function() {
      FB.init({
        appId: "285763282051548",
         status: true,
      xfbml: true,
      cookie: true,
        version: 'v3.2'
      });

      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");

      FB.AppEvents.logPageView();
      console.log("fbAsyncInit");
      // Get FB Login Status
      FB.getLoginStatus(response => {
        console.log("res", response); // 這裡可以得到 fb 回傳的結果
      });
      FB.login(function(response) {
        //https://developers.facebook.com/docs/graph-api/reference/v2.2/user
        console.log("login", response);
        self.id = response.authResponse.userID;
        FB.api("/me?fields=id,name,email,cover,birthday,link,picture", function(
          info
        ) {
          console.log("/me", info);
          self.info = info;
          // FB.api('/' + info.id + '/accounts?fields=is_business', 'GET', {}, function(accounts) {
          //     console.log('/accounts', accounts)
          //         // Insert your code here
          // })
        });
      });
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
