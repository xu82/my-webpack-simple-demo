<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <ul>
      <li>
        <router-link to="/first">页面1</router-link>
      </li>
      <li>
        <router-link to="/second">页面2</router-link>
      </li>
      <li>
        <router-link to="/third">页面3</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

/*我们应该在App.vue使用组件（因为在index.html里定义了  所以呢就以这个组件作为主入口） */

//step1:引入组件
/*import firstComponent from './component/1.vue';
import secondComponent from './component/2.vue';*/
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App啦啦啦啦啦'
    }
  }/*,
  //step2:注册组件
  components:{firstComponent}*/
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
