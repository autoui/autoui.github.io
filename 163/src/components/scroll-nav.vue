<template>
  <iscroll-view ref="scrollView" class="header-nav scroll-view" :scrollerClass="{'header-nav-scroller':true}" :options="{click: true, scrollX: true}">
    <ul class="header-nav-list">
      <li v-for="( nav, index ) in navList" class="nav-item" :class="{ active: activeNavDefault == nav.id }">
        <em class="nav-item-txt">{{ nav.text }}</em>
      </li>
    </ul>
  </iscroll-view>
</template>

<script>
export default {

  data () {
    return {
    }
  },

  props: {
    navList: {
      type: Array,
      default () {
        return []
      }
    },
    activeNavDefault: {
      type: Number,
      default: 1
    }
  },

  methods: {

  },

  mounted () {
    this.$refs.scrollView.refresh()
    console.log(this.$refs.scrollView)
  }

  // beforeCreate () {},

  // created () {},

  // beforeMount () {},

  // beforeDestroy () {},

  // destroyed () {},

  // beforeUpdate () {},

  // updated () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header-nav {
  position: relative;
  width: 100%;
  height:.8rem;
  overflow: hidden;
  touch-action: none;
}
.header-nav .header-nav-scroller {
  padding: 0 .4rem;
  position: absolute;
  z-index: 1;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  height: 100%;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  -o-text-size-adjust: none;
  text-size-adjust: none;
}
.header-nav-list {
  font-size: 0;
  white-space: nowrap;
}
.header-nav .header-nav-list .nav-item {
    position:relative;
    display: inline-block;
    margin-left:.64rem;
}
.header-nav .header-nav-list .nav-item:first-of-type{
    margin-left:0;
}
.header-nav .header-nav-list .nav-item .nav-item-txt {
    display:inline-block;
    padding:0 .21333333rem/* 16px */;
    line-height:.8rem;
    font-size:.37333rem;
    color:#333;
    text-align:center;
}
.header-nav .header-nav-list .nav-item.active{
    color:#b4282d;
}
.header-nav .header-nav-list .nav-item.active .nav-item-txt {
    position:relative;
    color:#b4282d;
}
.header-nav .header-nav-list .nav-item.active .nav-item-txt:after{
    content:' ';
    position:absolute;
    left:0;bottom:0;
    width:100%;
    height:.05333rem;
    background-color:#b4282d;
}
</style>
