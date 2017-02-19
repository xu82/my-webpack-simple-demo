import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug=true;

//通过全局方法Vue.use()来使用VueRouter插件
Vue.use(VueRouter);

Vue.use(VueResource);

//定义组件
const thirdComponent={
	template:'<div><h2>我是第3个子页面</h2></div>'
};
//引入组件
import firstComponent from './component/1.vue';
import secondComponent from './component/2.vue';
//创建一个路由器实例
//并且配置路由规则
const router=new VueRouter({
	mode:'history',//不知道啥意思
	// base:_dirname,
	routes:[
		{path:'/first',component:firstComponent},
		{path:'/second',component:secondComponent},
		{path:'/third',component:thirdComponent}
	]
});


//可以启动应用了
//路由器会创建一个App实例，并且挂载到#app这个元素上
const app=new Vue({
	//要通过router配置参数注入路由，从而让整个应用都有路由功能
	router:router,
	//不知道什么意思
	render:h =>h(App)
}).$mount('#app');
