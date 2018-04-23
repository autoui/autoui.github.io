<template>
    <div class="listPage">
        <div class="header">
            <div class="header-logo">
                <div class="logo"></div>
            </div>
            <scroll-nav :navList="navList" :activeNavIndex="activeNavIndex"></scroll-nav>
        </div>

        <swiper class="listpage-ad-swiper" :type="swiperType" :swiperSlides="swiperSlides">
            <div slot="slide_1">1</div>
            <div slot="slide_2">2</div>
            <div slot="slide_3">3</div>
            <div slot="slide_4">4</div>
            <div slot="slide_5">5</div>
        </swiper>

        <div v-for="category in categories" :key="category.cat_id">
            <p-list @onListitemClick="onListitemClick" :title="category.title" :skin="category.skin" :items="category.items" :uniqueKey="category.uniqueKey" :showMore="showMore"></p-list>
        </div>

        <div class="redirectto-orderlog" @click="redirecttoOrderlog" style="padding: 20px;">跳转到order log</div>
    </div>
</template>

<script>
import scrollNav from '@/components/scroll-nav.vue'
import swiper from '@/components/swiper.vue'
import pList from '@/components/plist.vue'

export default {
    name: 'list',
    components: {
        scrollNav,
        swiper,
        pList
    },

    data () {
return {
            navList: [
                { id: 1, text: '推荐1' },
                { id: 2, text: '推荐2' },
                { id: 3, text: '推荐3' },
                { id: 4, text: '推荐4' },
                { id: 5, text: '推荐5' },
                { id: 6, text: '推荐6' },
                { id: 7, text: '推荐7' },
                { id: 8, text: '推荐8' }
            ],

            activeNavIndex: 1,

            swiperType: 'html',
            swiperSlides: [
                'slide_1',
                'slide_2',
                'slide_3',
                'slide_4',
                'slide_5'
            ],

            categories: [
                {
                    title: 'category 1',
                    items: [
                    {'id': 1, 'img': 'https://s17.mogucdn.com/mlcdn/c45406/171108_37hik088i3e6i7k5k66aj1j8cekgf_640x960.jpg_360x480.v1cAC.70.webp', 'title': 'item 1', 'price': 10000},
                    {'id': 2, 'img': 'https://s18.mogucdn.com/mlcdn/c45406/171130_37cfahl0e69dgf6i4c0gl2101bfc3_640x960.jpg_360x480.v1cAC.70.webp', 'title': 'item 1', 'price': 10000},
                    {'id': 3, 'img': 'https://s2.mogucdn.com/mlcdn/c45406/170802_1441dcakklb8kieg9j1c940936555_640x960.jpg_360x480.v1cAC.70.webp', 'title': 'item 1', 'price': 10000},
                    {'id': 4, 'img': 'https://s18.mogucdn.com/mlcdn/c45406/171130_37cfahl0e69dgf6i4c0gl2101bfc3_640x960.jpg_360x480.v1cAC.70.webp', 'title': 'item 1', 'price': 10000},
                    {'id': 5, 'img': 'https://s2.mogucdn.com/mlcdn/c45406/170814_02ged5432h0f0fl4d91c4hb1a5088_640x960.jpg_360x480.v1cAC.70.webp', 'title': 'item 1', 'price': 10000}
                    ],
                    skin: '',
                    uniqueKey: 'id'
                },
                {
                    title: 'category 2',
                    items: [
                    {'a_id': 1, 'img': 'https://s17.mogucdn.com/mlcdn/c45406/171108_37hik088i3e6i7k5k66aj1j8cekgf_640x960.jpg_360x480.v1cAC.70.webp', 'title': 'item 1', 'price': 10000},
                    {'a_id': 2, 'img': 'https://s18.mogucdn.com/mlcdn/c45406/171130_37cfahl0e69dgf6i4c0gl2101bfc3_640x960.jpg_360x480.v1cAC.70.webp', 'title': 'item 1', 'price': 10000},
                    {'a_id': 3, 'img': 'https://s2.mogucdn.com/mlcdn/c45406/170802_1441dcakklb8kieg9j1c940936555_640x960.jpg_360x480.v1cAC.70.webp', 'title': 'item 1', 'price': 10000},
                    {'a_id': 4, 'img': 'https://s18.mogucdn.com/mlcdn/c45406/171130_37cfahl0e69dgf6i4c0gl2101bfc3_640x960.jpg_360x480.v1cAC.70.webp', 'title': 'item 1', 'price': 10000},
                    {'a_id': 5, 'img': 'https://s2.mogucdn.com/mlcdn/c45406/170814_02ged5432h0f0fl4d91c4hb1a5088_640x960.jpg_360x480.v1cAC.70.webp', 'title': 'item 1', 'price': 10000}
                    ],
                    skin: '',
                    uniqueKey: 'a_id'
                }
            ],
            showMore: true
        }
    },

    methods: {
        onListitemClick (target) {
            var pid = target.dataset.id;

            console.log(target.dataset.id)

            this.$router.push({
                name: 'detail',
                params: { pid }
            })
        },

        redirecttoOrderlog () {
            this.$router.push({
                name: 'orderlog'
            })
        }
    }
}

</script>

<style lang="scss">

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
   .listpage-ad-swiper {
      height: 5.33333333rem;

      img {
       display: block;
       width: 100%;
   }

   .mint-swipe-indicator {
       width: .53333333rem;
       height: .10666667rem;
       background-color: #fff;
       border-radius: 0;

       &.is-active {
         width: .53333333rem;
         opacity: 1;
     }
 }
}

</style>
