<template>
    <div class="w-30">
        <Chart :data="c" :type="'column'" :tooltipCustom="format" />
    </div>
</template>

<script setup>
import Chart from '../components/charts/Charts.vue'

const format = '<b>{key}</b><br/>{series.name}?: {y}<br/>' + 'Total: {point.stackTotal}'

const c = {
    categories: ['Africa', 'America', 'Asia', 'Europe'],
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
}
</script>
