<template>
    <Chart :options="chartOptions"></Chart>
</template>

<script setup>
import Highcharts from 'highcharts'
import highchartsMore from 'highcharts/highcharts-more'
import { Chart } from 'highcharts-vue'
import { watch } from 'vue'

highchartsMore(Highcharts)

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    type: {
        type: String,
        required: false,
    },
    tooltipCustom: {
        type: Object,
        required: false,
    },
})

console.log(props)

const chartOptions = props.data.chartOptions

// watch(
//     () => props.data,
//     (newData) => {
//         chartOptions.value.xAxis.categories = newData.categories
//         chartOptions.value.series = newData.series
//         chartOptions.value.colors = newData.colors
//     },
//     { immediate: true }
// )
</script>
