<template>
    <div class="order-logs">
        <search></search>
        <datetime-picker></datetime-picker>
    </div>
</template>

<script>
import search from '@/components/search.vue'
import DatetimePicker from '@/components/DateTimePicker.vue'

export default {
    name: 'orderlog',

    components: {
        search,
        DatetimePicker
    },

    data () {
        return {}
    }
}
</script>

<style scoped>
</style>
