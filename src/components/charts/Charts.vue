<template>
    <Chart :options="chartOptions"></Chart>
</template>

<script setup>
import Highcharts from 'highcharts'
import highchartsMore from 'highcharts/highcharts-more'
import { Chart } from 'highcharts-vue'
import { ref, watch } from 'vue'

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
        type: String,
        required: false,
    },
})

console.log(props)

const chartOptions = ref({
    credits: {
        enabled: false,
    },
    accessibility: {
        enabled: false,
    },
    chart: {
        type: props.type ? props.type : 'bar',
        useStyle: true,
        height: '350px',
        marginBottom: 30,
    },
    title: {
        text: undefined,
    },
    subtitle: {
        text: undefined,
    },
    series: props.data.series,
    colors: props.data.colors,
    xAxis: {
        categories: props.data.categories,
        gridLineWidth: 0,
        lineWidth: 0,
        labels: {
            useHTML: true,
            style: { color: '#827D7D' },
        },
    },
    yAxis: {
        min: 0,
        gridLineWidth: 0,
        title: {
            text: null,
        },
        labels: {
            enabled: false,
        },
        maxPadding: 0.5,
        stackLabels: {
            enabled: false,
        },
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false,
            },
            groupPadding: 0.1,
        },
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                style: {
                    textShadow: false,
                    textOutline: 0,
                    fontWeight: 'normal',
                },
                format: '{point.y:.1f}%',
            },
        },
    },
    legend: {
        reversed: true,
        itemStyle: { color: '#827D7D', fontWeight: 'bold' },
        symbolHeight: 12,
        symbolWidth: 12,
        symbolRadius: 0,
        y: 20,
    },
    tooltip: {
        shared: true,
        outside: true,
        format: props.tooltipCustom ? props.tooltipCustom : '',
    },
})

watch(
    () => props.data,
    (newData) => {
        chartOptions.value.xAxis.categories = newData.categories
        chartOptions.value.series = newData.series
        chartOptions.value.colors = newData.colors
    },
    { immediate: true }
)
</script>
