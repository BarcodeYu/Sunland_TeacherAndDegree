<template>
  <div id="Navigation" class="navigation">
    <ul class="menu">
      <li v-for="(sec,index) in navigation" :key="index" @click="active_class(sec)">
        <div :class="{section1:index==section1,section2:index==section2,
        section1_active:index==section1_active,section2_active:index==section2_active}" class="icon"></div>
        <p>{{sec.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navigation: 0,
      active: 0,
      section1: 'section1',
      section2: 'section2',
      section1_active: 'section1_active',
      section2_active: 'section2_active'
    }
  },
  created () { // mock数据
    this.$axios.get('/js/data.json').then(res => {
      this.navigation = res.data.Navigation
      // console.log(res.data.data.section1) // 测试是否成功
    })
  },
  methods: {
    active_class (index) {
      this.active = index.id
      if (this.active === 'teacher') {
        this.section1_active = 'section1_active'
        this.section2_active = 'section2_active'
        this.$emit('popTeacher') // 传输popTeacher给父类
      } else {
        this.section1_active = 'section1'
        this.section2_active = 'section2'
        this.$emit('popDegree') // 传输popDegree给父类
      }
    }
  }
}
</script>

<style lang="less">
.navigation{
  position: fixed;
  width: 750px;
  height: 88px;
  // background: #eee;
  // border-top: #eee 1px solid;
  line-height: 88px;
  bottom: 0;
  z-index: 20;
  background: #fff;
  // border-top: 1px #eee solid;
  .menu{
    display: flex;
    width: 750px;
    height: 88px;
    align-items: center;
    li{
      flex: 1;
      line-height: 26px;
      &:nth-child(1){
        border-right: #eee 1px solid;
      }
    }
    .icon{
      display: inline-block;
      width: 36px;
      height: 36px;
    }
    .section1{
      background: url(./images/teacher_active.png) no-repeat;
      background-size: 100%;
    }
    .section2{
      background: url(./images/degree.png) no-repeat;
      background-size: 100%;
    }
    .section1_active{
      background: url(./images/teacher.png) no-repeat;
      background-size: 100%;
    }
    .section2_active{
      background: url(./images/degree_active.png) no-repeat;
      background-size: 100%;
    }
    p{
      font-size: 24px;
    }
  }
}
</style>
