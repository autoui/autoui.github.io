<template>
    <div class="plist" :class="[skin]">
        <h4 class="plist-title">{{title}}</h4>
        <div class="plist-content">
            <ul class="plist-items">
                <li class="plist-item" v-for="item in items" :key="item[uniqueKey]" :data-id="item[uniqueKey]" @click="onItemClick">
                    <div class="plist-item-img-wrap">
                        <img :src="item.img" alt="" />
                    </div>
                    <div class="plist-item-info">
                        <div class="plist-item-title">{{item.title}}</div>
                        <div class="plist-item-price">{{item.price}}</div>
                    </div>
                </li>
                <li class="plist-more" v-if="showMore">
                    <div class="plist-item-img-wrap">
                        <div class="more-text">更多</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['skin', 'title', 'items', 'uniqueKey', 'showMore'],

    data () {
        return {}
    },

    methods: {
        onItemClick (e) {
            this.$emit('onListitemClick', e.currentTarget)
        }
    }
}
</script>

<style scoped lang="scss">
.plist {
  margin-top: .26666667rem;
  background-color: #fff;

  .plist-title {
    color: #333;
    line-height: 1.6rem;
    font-size: .37333rem;
    text-align: center;
  }

  .plist-content {
    .plist-items {
      font-size: 0;
      .plist-item,
      .plist-more {
        position: relative;
        display: inline-block;
        width: 50%;
        padding: 0rem 0.26666666666666666rem 0.44rem 0.13333333333333333rem;
        box-sizing: border-box;
        overflow: hidden;
        font-size: .37333333rem;
        vertical-align: top;

        &:nth-child(2n+1) {
          padding: 0rem 0.13333333333333333rem 0.44rem 0.26666666666666666rem;
        }

        .plist-item-img-wrap {
          position: relative;
          padding-bottom: 120%;
          background-color: #f4f4f4;
          overflow: hidden;

          img,
          .more-text {
            position: absolute;
            left: 0; right: 0; top: 0; bottom: 0;
            display: block;
            width: 100%;
            margin: auto;
          }
          .more-text {
            height: 1.5em;
          }
        }
        .plist-item-info {
          text-align: center;

          .plist-item-title {
            margin-top: .13333333rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .plist-item-price {
            color: #b4282d;
          }
        }
      }

      .plist-more {}
    }
  }
}
</style>
