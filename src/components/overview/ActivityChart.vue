<template>
  <div class="card">
    <div class="d-flex-between">
      <div>Activity</div>
      <Select v-model="selectedCity" :options="cities" optionLabel="name"/>
    </div>
    <Chart type="line" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import Chart from 'primevue/chart'
import Select from 'primevue/select';
import { ref, onMounted } from 'vue'

const selectedCity = ref({ name: 'This week', code: 'this' });
const cities = ref([
    { name: 'This week', code: 'this' },
    { name: 'Last week', code: 'last' },
]);

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    labels: ['S', 'M', 'T', 'W', 'S', 'F', 'S'],
    datasets: [
      {
        label: 'Third Dataset',
        data: [1, 2, 1.4, 2.5, 1.2, 2, 2.1],
        fill: true,
        borderColor: '#141522',
        tension: 0.4,
        backgroundColor: 'white',
      },
    ],
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue(
    '--p-text-muted-color',
  )
  const surfaceBorder = documentStyle.getPropertyValue(
    '--p-content-border-color',
  )

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  }
}
</script>

<style scoped>
  .card{
    border-radius: 10px;
    padding: 1.2500rem;
    background-color: #F5F5F7;
  }
</style>