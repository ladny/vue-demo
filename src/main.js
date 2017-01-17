import Vue from 'vue'//ES6中的语法 引入到当前文件
import VueRouter from 'vue-router'
import App from './App'

// Vue.use(VueRouter);
// Vue.config.debug = true;

// var router = new VueRouter();
// router.map({
// 	'/index':{
// 		name:'index',
// 		component:App
// 	},
// 	'/donate':{
// 		name:'donate',
// 		component:donate
// 	}
// });
// router.start(App,"router-view");

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },//组件引用
})

//   const Foo={ template:'<div>foo</div>'}
//   const Bar={ template:'<div>bar</div>'}
//   const routes=[
//     { path: '/foo', component:Foo},
//     { path: '/bar', component:Bar}
//   ]
//   const router = new VueRouter({
//   	routes
//   })

//   const app=new Vue({
//     router: router,
//     render: h => h(App)
//   }).$mount("#app")

// var Foo = Vue.extend({
// 	template:"<p>This is foo!</p>"
// })
// var Bar = Vue.extend({
// 	template:"<p>This is bar!</p>"
// })
// // var App = Vue.extend({})
// var router = new VueRouter()
// router.map({
// 	'/index':{
// 		name:'index',
// 		component:App
// 	},
// 	'/donate':{
// 		name:'donate',
// 		component:donate
// 	}
// });
// router.start(App,"#app");