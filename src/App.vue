<template>
  <div id="app">
  <h1>{{ title }}</h1>
  <input v-model="newItem" v-on:keyup.enter="addNew">
  <ul>
  <li v-for="item in items" v-bind:class="{ finished: item.isFinished}" v-on:click="toggleFinish(item)">
    {{item.label}}
  </li>
  </ul>
  <p>child tells me: {{ childWords }}</p>
  <!-- msgfromfather父组件传递给子组件参数 -->
  <!-- on-on:child-tell自定义组件 子组件传递给父组件参数 -->
  <component-a msgfromfather='you die!' v-on:child-tell-sth='listenToMyBoy'></component-a>

  <br/>
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="slide-fade">
    <p v-if="show">hello transition</p>
  </transition>
  <br/>
  <ul>
  <li v-for="item in main">
    {{item.name}}{{item.info}}
  </li>
  </ul>
  <br/>
  <hr/>
  <p>router路由</p>
  <p>
    <a v-link="{ path:'/foo' }">go to foo</a>
    <a v-link="{ path:'/bar'}">go to bar</a>
  <!-- <router-link to="/foo">a Go to foo</router-link> -->
  <!-- <router-link to="/bar">a Go to bar</router-link> -->
  </p>
  <router-view></router-view>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA'
import Store from './storestorage'

//es6语法 new vue()省略
export default {
  data: function () {
    return {
      title: "this is a todo list",
      items: Store.fetch(),
      newItem:'',
      show:true,
      childWords:'',
      main:[
        {"name":"家访结论：","info":"info1"},
        {"name":"核心备注：","info":"info2"}
        ]
        }
    },
    components:{ ComponentA }, //注册组件
    watch:{
      items:{
        handler: function(items){
          Store.save(items)
        },
        deep:true
      }
    },
    // events:{
    //   'child-tell-sth': function (msg){
    //     this.childWords = msg;
    //   }
    // }
    methods:{
      toggleFinish: function(item){
        item.isFinished = !item.isFinished;
      },
      addNew: function(){
        this.items.push({
          label:this.newItem,
          isFinished:true
        })
        this.newItem=''
      },
      //子组件传递给父组件
      listenToMyBoy: function(msg){
        console.log(msg);
        this.childWords = msg;
      }
    }
  }


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished{
  text-decoration: underline;
}
/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
} */
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
.router-link-active {
  color: red;
}

</style>
