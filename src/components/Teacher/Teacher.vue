<template>
<div id="Teacher" class="teacher">
  <!-- 滚动banner -->
  <div class="banner">
    <swiper :options="swiperOption" class="swiper-radius">
      <swiper-slide>
        <!-- <img :src="bannerImg01" alt="" class="banner-img"> -->
        <img src="./images/banner02.jpg" alt="" class="banner-img">
      </swiper-slide>
      <swiper-slide>
        <!-- <img :src="bannerImg01" alt="" class="banner-img"> -->
        <img src="./images/banner01.jpg" alt="" class="banner-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="jc"></div>
  </div>
  <div class="main">
    <h1 class="main-h1">
      <span class="icon01">{{icon.diamond}}</span><span class="icon02">{{icon.diamond}}</span>
      {{maintitle}}
      <span class="icon02">{{icon.diamond}}</span><span class="icon01">{{icon.diamond}}</span>
    </h1>
    <div v-for="(lessons,index) in lesson" :key="index" class="class-wrap" :class="{class03:index==class03}">
      <!-- <img :src="lessons.img" alt=""> -->
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
  <div class="teacher-page2">
    <h1>
      <span class="icon01">{{icon.diamond}}</span><span class="icon02">{{icon.diamond}}</span>
      常见问题
      <span class="icon02">{{icon.diamond}}</span><span class="icon01">{{icon.diamond}}</span>
    </h1>
    <ul class="page2-ul">
      <li v-for="(questions,index) in question" :key="index" class="ul-li">{{index}}.{{questions.content}}<span class="li-span">点击咨询</span></li>
    </ul>
  </div>
  <div class="teacher-page3">
    <h1>
      <span class="icon01">{{icon.diamond}}</span><span class="icon02">{{icon.diamond}}</span>
      关于尚德
      <span class="icon02">{{icon.diamond}}</span><span class="icon01">{{icon.diamond}}</span>
    </h1>
    <img src="./images/about.png" alt="">
  </div>
  <div class="teacher-gif">
    <img src="./images/180118lzz_page2favourable.gif" alt="" class="gif">
  </div>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        direction: 'horizontal',
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        loop: true,
        setWrapperSize: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        initialSlide: 1,
        loopAdditionalSlides: 1,
        autoplay: {
          delay: 1800
        },
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      },
      Teacher: {},
      teacherData: {},
      bannerImg01: '',
      maintitle: '',
      class01: '',
      lesson: {},
      question: {},
      icon: '',
      class03: 'class03'
    }
  },
  created () { // mock数据
    this.$axios.get('/js/data.json').then(res => {
      this.teacherData = res.data
      this.bannerImg01 = res.data.Teacher.Banner.banner01.src
      this.maintitle = res.data.Teacher.Main.h1
      this.class01 = res.data.Teacher.Lesson.class01
      this.lesson = res.data.Teacher.Lesson
      this.question = res.data.Teacher.Question
      this.icon = res.data.Teacher.icon
      console.log(res.data) // 测试是否成功
    })
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less">
h1{
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 12px;
}
.class03{
  height: 220px;
}
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
.gif{
  width: 750px;
  height: 250px;
}
.teacher{
  // padding-top: 98px;
  background: #fff;
  z-index: 1;
  .banner{
    width: 750px;
    height: 400px;
    line-height: 400px;
    // background: rgba(248, 231, 83, 1);
    // margin-bottom: 24px;
  }
  .main{
    width: 750px;
    height: 1300px;
    // border-top: #eee 8px solid;
    h1{
      text-align: center;
    }
    .main-h1{
      font-size: 30px;
      padding-top: 32px;
      margin-bottom: 24px;
      font-weight: 700;
    }
    .teacher-btn{
      margin-top: 24px;
      width: 380px;
      height: 80px;
      border: none;
      color: #fff;
      background: #de2821;
      text-align: center;
      vertical-align: middle;
    }
    .class-wrap{
      position: relative;
      padding:  28px 64px 28px 64px;
      border-top: 1px #eee solid;
      // height: auto;
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
        padding-top: 20px;
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
        line-height: 30px;
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
  }
  .teacher-page2{
    width: 750px;
    height: 540px;
    border-top: #eee 12px solid;
    h1{
      font-size: 30px;
      margin: 24px 0 24px 0;
      font-weight: 700;
    }
    .page2-ul{
      line-height: 50px;
      text-align: left;
      padding: 28px 64px 28px 64px;
    }
    .ul-li{
      border-bottom: 1px #eee solid;
    }
    .li-span{
      float: right;
      color: #ce0000;
    }
  }
  .teacher-page3{
    width: 750px;
    height: 860px;
    margin-top: 30px;
    h1{
      font-size: 30px;
      margin: 24px 0 24px 0;
      font-weight: 700;
    }
    img{
      width: 750px;
      height: 714px;
    }
  }
  .teacher-gif{
    padding-bottom: 100px;
  }
}
.banner-items{
  width: 750px;
  height: 400px;
}
.banner-img{
  width: 750px;
  height: 400px;
}
</style>
