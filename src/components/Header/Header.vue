<template>
<div id="Header" class="header">
  <ul class="header-wrap">
    <li v-for="(item,index) in items" :key="index" :class="{back:index==back,customer:index==customer}">
      <img :src="item.icon" alt="" class="header-img"></li>
      <!-- <img src="./images/back.png" alt="" class="header-img"></li> -->
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: {
        'back': {
          'id': 'back',
          'name': '取消',
          'icon': './images/back.png'
        },
        'customer': {
          'id': 'customer',
          'name': '客服',
          'icon': './images/customer.png'
        }
      },
      back: 'back',
      customer: 'customer'
    }
  }
}
</script>

<style lang="less">
.header{
  position: fixed;
  width: 750px;
  height: 98px;
  z-index: 20;
  .header-wrap{
    display: flex;
    width: 750px;
    height: 98px;
    align-items: center;
    justify-content: space-between;
    li{
      .header-img{
        width: 24px;
        height: 24px;
      }
    }
    .back{
      margin-left: 64px;
    }
    .customer{
      margin-right: 64px;
    }
  }
}
</style>
