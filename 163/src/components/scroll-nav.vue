<template>
    <iscroll-view ref="iscroll" class="scroll-nav" :options="{click: true, scrollX: true}" :scrollerStyle="{}" :scrollerClass="{'scroll-nav-scroller': true}">
        <ul class="scroll-nav-list">
            <li v-for="nav in navList" class="nav-item" :class="{ 'active': activeNavIndex == nav.id }" :key="nav.id">
                <em class="nav-item-txt">{{ nav.text }}</em>
            </li>
        </ul>
    </iscroll-view>
</template>

<script>

export default {

    props: ['navList', 'activeNavIndex'],

    methods: {},

    data () {
        return {}
    }

}

</script>

<style scoped>

.scroll-nav {
    touch-action: none;
    position: relative;
    width: 100%;
    height:.8rem;
    overflow: hidden;
}
.scroll-nav .scroll-nav-scroller {
    padding: 0 .4rem;
    position: absolute;
    z-index: 1;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    /*width: 5000px;*/
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
.scroll-nav-list {
    font-size: 0;
    white-space: nowrap;
}
.scroll-nav .scroll-nav-list .nav-item {
    position:relative;
    display: inline-block;
    /*float: left;*/
    margin-left:.64rem;
/*    -webkit-flex-shrink:0;
    -moz-flex-shrink:0;
    -ms-flex-negative:0;
    flex-shrink:0;*/
}
.scroll-nav .scroll-nav-list .nav-item:first-of-type{
    margin-left:0;
}
.scroll-nav .scroll-nav-list .nav-item .nav-item-txt {
    display:inline-block;
    padding:0 .21333333rem/* 16px */;
    line-height:.8rem;
    font-size:.37333rem;
    color:#333;
    text-align:center;
}
.scroll-nav .scroll-nav-list .nav-item.active{
    color:#b4282d;
}
.scroll-nav .scroll-nav-list .nav-item.active .nav-item-txt {
    position:relative;
    color:#b4282d;
}
.scroll-nav .scroll-nav-list .nav-item.active .nav-item-txt:after{
    content:' ';
    position:absolute;
    left:0;bottom:0;
    width:100%;
    height:.05333rem;
    background-color:#b4282d;
}

</style>
