<template>
  <div id="Degree" class="degree">
    <div class="banner">
      <!-- {{degreeBanner}} -->
      <!-- <img :src="degreeBanner" alt="" class="banner-img"> -->
      <img src="./images/banner01.jpg" alt="" class="banner-img">
    </div>
    <div class="main">
      <h1 class="main-h1">
        <span class="icon01">{{degreeicon}}</span>
        <span class="icon02">{{degreeicon}}</span>
        {{degreeMain.h1}}
        <span class="icon02">{{degreeicon}}</span>
        <span class="icon01">{{degreeicon}}</span>
      </h1>
      <div class="class-wrap" v-for="(lessons,index) in degreeLesson" :key="index">
        <img :src="lessons.img" alt="">
        <h1>{{lessons.name}}</h1>
        <p class="class-introduction" v-for="(introductions,index) in lessons.introduction" :key="index">
          <span class="introduction-index">{{introductions.index + '  ' + introductions.root + "：" }}</span>
          {{introductions.content}}
        </p>
        <p class="sell">{{lessons.sell}}</p>
      </div>
    <button class="teacher-btn" onclick="openBear()">了解更多</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      degreeBanner: {},
      degreeicon: {},
      degreeMain: {},
      degreeLesson: {}
    }
  },
  created () { // mock数据
    this.$axios.get('/js/data.json').then(res => {
      this.degreeBanner = res.data.Degree.Banner.banner01.src
      this.degreeicon = res.data.Degree.icon.diamond
      this.degreeMain = res.data.Degree.Main
      this.degreeLesson = res.data.Degree.Lesson
      // console.log(res.data) // 测试是否成功
    })
  }
}
</script>

<style lang="less">
.degree{
  .banner{
    width: 750px;
    height: 400px;
    line-height: 400px;
    background: #eee;
  }
  .main{
    width: 750px;
    height: 1500px;
    // border-top: #eee 8px solid;
    .icon01{
      vertical-align:middle;
      color: #fed189;
      font-size: 48px;
    }
    .icon02{
      vertical-align:middle;
      color: #fd94ab;
      font-size: 48px;
    }
    h1{
      text-align: center;
    }
    span{
      margin: -8px;
    }
    .main-h1{
      font-size: 30px;
      padding-top: 32px;
      margin-bottom: 24px;
      font-weight: 700;
      letter-spacing: 12px;
    }
    .class-wrap{
      position: relative;
      padding:  64px 64px 88px 64px;
      border-top: 1px #eee solid;
      h1{
        // display: block;
        text-align: left;
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 0;
        margin-bottom: 24px;
        margin-left: 4px;
        &::before{
          content: "";
          position: relative;
          padding-right: 6px;
          height: 32px;
          margin-right: 10px;
          background: #ce0000;
        }
      }
      p{
        display: block;
        margin-bottom: 10px;
      }
      .sell{
        position: absolute;
        padding-top: 40px;
        right: 88px;
        bottom: 0;
        font-size: 34px;
        color: #ce0000;
      }
      img{
        float: left;
        margin-right: 16px;
        width: 200px;
        // height: 330px;
      }
      .class-introduction{
        line-height: 44px;
        text-align: left;
        .introduction-index{
          font-weight: 700;
          color: #fd94ab;
        }
      }
    }
    .class-wrap:nth-child(2){
      border-top: 0px #eee solid;
    }
    .teacher-btn{
      margin-top: 44px;
      width: 380px;
      height: 80px;
      border: none;
      color: #fff;
      background: #de2821;
      text-align: center;
      vertical-align: middle;
    }
  }
}
</style>
