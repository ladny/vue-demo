<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msgfromfather }}</h1>
    <button v-on:click="onClickMe">open mouse! </button>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      msg: 'hello world',
      //相当于已经赋值了msgfromfather
      }
  },
  props:['msgfromfather'],//从父级传过来
  methods:{
    onClickMe: function(){
      console.log(this.msgfromfather);
      this.$emit('child-tell-sth', this.msg)
    }
  } 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
