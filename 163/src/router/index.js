import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'
import List from '@/view/list'

Vue.use(Router)

// import Detail from '@/view/detail'
// import OrderLog from '@/view/order-log'

function generateComponent (path) {
    return resolve => require([`@/view${path}`], resolve)
}

const Detail = generateComponent('/detail')
const OrderLog = generateComponent('/order-log')

export default new Router({
    routes: [
        {
            path: '/',
            component: PageTransition,
            children: [
                {
                    path: '',
                    component: List
                },
                {
                    path: '/detail/:pid',
                    name: 'detail',
                    component: Detail,
                    props: true
                },
                {
                    path: '/order-log/',
                    name: 'orderlog',
                    component: OrderLog,
                    props: true
                }
            ]
        }
    ]

    // scrollBehavior (to, from, savedPosition) {
    //     // return  期望滚动到的位置
    // }
})
