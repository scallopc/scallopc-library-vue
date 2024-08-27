<template>
    <main>
        <Chart :data="chartOptions" />
    </main>
</template>

<script setup>
import Chart from '../components/charts/Charts.vue'
import { ref } from 'vue'

const format = '<b>{key}</b><br/>{series.name}?: {y}<br/>' + 'Total: {point.stackTotal}'

// const c = {
//     categories: ['Africa', 'America', 'Asia', 'Europe'],
//     series: [
//         {
//             name: 'Year 1990',
//             data: [632, 727, 3202, 721],
//         },
//         {
//             name: 'Year 2000',
//             data: [814, 841, 3714, 726],
//         },
//         {
//             name: 'Year 2021',
//             data: [1393, 1031, 4695, 745],
//         },
//     ],
//     colors: ['#123d6d', '#467cb8', '#97c3ea'],
//     tooltip: {
//         shared: true,
//         outside: true,
//         format: format,
//     },
// }

const chartOptions = {
    credits: {
        enabled: false,
    },
    accessibility: {
        enabled: false,
    },
    chart: {
        type: 'bar',
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
    series: [
        {
            name: 'Year 1990',
            data: [632, 727, 3202, 721],
        },
        {
            name: 'Year 2000',
            data: [814, 841, 3714, 726],
        },
        {
            name: 'Year 2021',
            data: [1393, 1031, 4695, 745],
        },
    ],
    colors: ['#123d6d', '#467cb8', '#97c3ea'],
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe'],
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
    tooltip: { shared: true, outside: true, format: format },
}
</script>
