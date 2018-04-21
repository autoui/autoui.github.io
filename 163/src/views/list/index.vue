<template>
  <header class="header">
    <section class="header-logo">
      <div class="logo"></div>
    </section>

    <scroll-nav :nav-list="navList" :active-nav-default="activeNavDefault"></scroll-nav>

    <swiper :swiper-option="swiperOption" :swiper-slides="swiperSlides"></swiper>
  </header>
</template>

<script>
import scrollNav from '@/components/scroll-nav.vue'
import swiper from '@/components/swiper.vue'
export default {

  components: {
    scrollNav,
    swiper
  },

  data () {
    return {
      navList: [
        {
          id: 1,
          text: '测试'
        },
        {
          id: 2,
          text: '测试'
        },
        {
          id: 3,
          text: '测试'
        },
        {
          id: 4,
          text: '测试3'
        },
        {
          id: 5,
          text: '测试3'
        },
        {
          id: 6,
          text: '测试3'
        },
        {
          id: 7,
          text: '测试3'
        },
        {
          id: 8,
          text: '测试3'
        }
      ],

      activeNavDefault: 1,

      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [
        'http://yanxuan.nosdn.127.net/1057df5341d023a340a603dc6a6f5fe7.jpg?imageView&thumbnail=750x0&quality=75',
        'http://yanxuan.nosdn.127.net/1057df5341d023a340a603dc6a6f5fe7.jpg?imageView&thumbnail=750x0&quality=75',
        'http://yanxuan.nosdn.127.net/1057df5341d023a340a603dc6a6f5fe7.jpg?imageView&thumbnail=750x0&quality=75',
        'http://yanxuan.nosdn.127.net/1057df5341d023a340a603dc6a6f5fe7.jpg?imageView&thumbnail=750x0&quality=75'
      ]
    }
  },

  methods: {
  },

  mounted () {},

  beforeCreate () {},

  created () {},

  beforeMount () {},

  beforeDestroy () {},

  destroyed () {},

  beforeUpdate () {},

  updated () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* style.css */
.header {
    background-color: #fff;
}
.header>.header-logo{
    display:-webkit-box;
    display:-webkit-flex;
    display:-moz-flex;
    display:-ms-flexbox;
    display:flex;
    -webkit-flex-flow:row nowrap;
    -moz-flex-flow:row nowrap;
    -ms-flex-flow:row nowrap;
    flex-flow:row nowrap;
    -webkit-box-align:center;
    -ms-flex-align:center;
    -webkit-align-items:center;
    -moz-align-items:center;
    align-items:center;
    justify-content: center;
    padding:.21333rem .4rem;
}
.header>.header-logo .logo{
    display:inline-block;
    width:1.84rem;
    height:.53333rem;
    margin-right:.26667rem;
    background-image:url(//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
    background-size:cover;
    background-position:center;
}
.header>.header-logo>.ipt{
    -webkit-box-flex:1;
    -webkit-flex-grow:1;
    -moz-flex-grow:1;
    -ms-flex-positive:1;
    flex-grow:1;
}
</style>
