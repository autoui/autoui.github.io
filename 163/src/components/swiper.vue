<!--
  轮播内容类型 type: img / html, 可用图片或者html
  如果是图片, swiperSlides数据格式为 [ { id: <唯一标识>, src: <图片地址> }... ]
  如果是html, swiperSlides数据格式为 [ <String>,... ], 值为所有具名插槽的slot值
-->
<template>
    <mt-swipe :auto="delay" @change="handleChange" :defaultIndex="defaultIndex" :showIndicators="showPagination" :continuous="isLoop" :speed="aniDuration">
        <mt-swipe-item v-for="slide in swiperSlides" :key="slide[slideUniqueKey]">
            <div v-if="type=='img'">
                <img v-lazy="slide.src" alt="" />
            </div>
            <div v-else>
                <slot :name="slide"></slot>
            </div>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'img'
        },
        delay: {
            type: Number,
            default: 3000
        },
        aniDuration: {
            type: Number,
            default: 300
        },
        defaultIndex: {
            type: Number,
            default: 0
        },
        showPagination: {
            type: Boolean,
            default: true
        },
        isLoop: {
            type: Boolean,
            default: true
        },
        swiperSlides: {
            type: Array,
            default () {
                return []
            }
        },
        slideUniqueKey: {
            type: String,
            default: 'id'
        }
    },

    data () {
        return {}
    },

    methods: {
        handleChange (swipeItemIndex) {
            this.$emit('slideChange', swipeItemIndex)
        }
    }
}
</script>

<style lang="scss">
.mint-swipe .mint-swipe-item img[lazy=loading] {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  width: 1.33333333rem;
  height: 1.33333333rem/* 100px */;
  margin: auto;
}
</style>
