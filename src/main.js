// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/application.js'
import './store/index.js'

Vue.config.productionTip = false

window.fbAsyncInit = function() {
    FB.init({
        appId: '162108417151159',
        cookie: true,
        xfbml: true,
        version: 'v2.9'
    })
    FB.AppEvents.logPageView()
    console.log('fbAsyncInit')
        // Get FB Login Status
    FB.getLoginStatus(response => {
        console.log('res', response) // 這裡可以得到 fb 回傳的結果
    })
    FB.login(function(response) {
        //https://developers.facebook.com/docs/graph-api/reference/v2.2/user
        console.log('login', response.authResponse.userID)
        FB.api('/me?fields=id,name,email,cover,birthday,link,picture', function(info) {
            console.log('/me', info)

            // FB.api('/' + info.id + '/accounts?fields=is_business', 'GET', {}, function(accounts) {
            //     console.log('/accounts', accounts)
            //         // Insert your code here
            // })
        })
    })
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})