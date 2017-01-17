<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="msg"/>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <ul>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
    </ul>

    <button v-on:click="greet('mm')">Greet</button><br/>


    <span>message is:{{ sss }}</span><br/>
    <input type="text" v-model="sss" placeholder="edit me"><br/>


    <input type="checkbox" id="jack" value="jack" v-model="checkedNames"><label for="jack">jack</label>
    <input type="checkbox" id="jone" value="jone" v-model="checkedNames"><label for="jone">jone</label>
    <input type="checkbox" id="mick" value="Mick" v-model="checkedNames"><label for="mick">Mick</label><br/>
    <span>checked names: {{ checkedNames }}</span><br/>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello',
      todos: [
        { text: 'learn 1'},
        { text: 'learn 2'},
        { text: 'learn 3'},
        { text: 'learn 4'}
        ],
        sss:'',
        checkedNames:[]
      }
  },
  methods:{
    greet: function (mm){
      console.log(mm);
    },
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
