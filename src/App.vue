<template>
  <div id="app">
    <h1> 🌈Fun with Colors🌈 </h1>
    <kendo-colorpicker v-model="color">ColorPicker</kendo-colorpicker>
    color: <span v-text="color"></span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      color: "5CE500"
    }
  }
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

</style>
