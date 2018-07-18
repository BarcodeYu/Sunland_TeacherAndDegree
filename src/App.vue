<template>
  <div id="app">
    <v-header></v-header>
    <v-navigation  @popTeacher="setTeacher()" @popDegree="setDegree()"></v-navigation>
    <v-teacher v-if="isTeacher"></v-teacher>
    <v-degree v-if="isDegree"></v-degree>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Teacher from './components/Teacher/Teacher'
import Degree from './components/Degree/Degree'
export default {
  name: 'App',
  data () {
    return {
      isTeacher: true,
      isDegree: false
    }
  },
  created () { // mock数据
    this.$axios.get('/api/Navigation').then(res => {
      // console.log(res.data) // 测试是否成功
    })
  },
  methods: {
    setTeacher () {
      this.isTeacher = true
      this.isDegree = false
    },
    setDegree () {
      this.isTeacher = false
      this.isDegree = true
    }
  },
  components: {
    'v-navigation': Navigation,
    'v-header': Header,
    'v-teacher': Teacher,
    'v-degree': Degree
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
}
</style>
