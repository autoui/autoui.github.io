<template>
  <div class="risk-list-page">
    <header-tab :config="tabConfig"></header-tab>
    <!-- <msg-cards :msgs="msgs" :getNextPageData="getNextPageData" :totalCount="totalCount"></msg-cards> -->
  </div>
</template>

<script>
  import headerTab from '../components/header-tab.vue'
  //    import MsgService from '../assets/js/fetch_service/msg.js'
  export default{
    components: {
      headerTab
      // msgCards
    },
    data () {
      return {
        // loadTabs: false,
        tabConfig: {
          parent: {
            arr: [{name: '导航一', href: '/#/nav-1-list'}, {name: '导航二', href: '/#/nav-2-list'}],
            activeIndex: 0
          },
          sub: {
            arr: [
              {cn_name: '标签一', en_name: 'tab1'},
              {cn_name: '标签二', en_name: 'tab2'},
              {cn_name: '标签三', en_name: 'tab3'},
              {cn_name: '标签四', en_name: 'tab4'},
              {cn_name: '标签五', en_name: 'tab5'},
              {cn_name: '标签六', en_name: 'tab6'},
              {cn_name: '标签七', en_name: 'tab7'}
            ],
            activeIndex: 0
          }
        }
        // msgs: [],
        // totalCount: 0,
        // searchKeys: {
        //   type: 'nav1',
        //   sub_type: 'tab1',
        //   count: 10,
        //   offset: 0
        // }
      }
    },
    methods: {
      initPageData () {
        let self = this

        let data1 = {
          status: 0,
          msg: 'success',
          data: {
            data: [
              {company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称1', type_cn_name: '优质'},
              {company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称2', type_cn_name: '优质'},
              {company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称3', type_cn_name: '优质'},
              {company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称4', type_cn_name: '优质'},
              {company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称5', type_cn_name: '优质'}
            ],
            total_count: 10000000000000
          }
        }
        if (data1.status === 0) {
          self.msgs = data1.data.data
          self.totalCount = data1.data.total_count
        }
      },
      getNextPageData () {
        let self = this
        self.searchKeys.offset += self.searchKeys.count
//          MsgService.getMsgList(self.searchKeys, function (data) {
//            if (data.status === 0) {
//              self.msgs = self.msg.concat(data.data.data)
//              console.log(self.msgs.length)
//            }
//          })
        setTimeout(function () {
          for (let i = 0; i < self.searchKeys.count; i++) {
            self.msgs.push({company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称' + (self.msgs.length + 1), type_cn_name: '优质'})
          }
        }, 1500)
      }
    }
  }
</script>

<style scoped lang="scss">
  .risk-list-page{
  }
</style>
