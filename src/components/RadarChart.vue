<template>
  <canvas ref="chartCanvas"></canvas>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Enregistre tous les éléments nécessaires

export default {
  name: 'RadarChart',
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const chartCanvas = ref(null);
    let chartInstance = null;

    // Créer le graphique lors du montage
    onMounted(() => {
      chartInstance = new Chart(chartCanvas.value, {
        type: 'radar', // Type de graphique radar
        data: props.chartData,
        options: props.chartOptions,
      });
    });

    // Détruire le graphique avant le démontage
    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    });

    return {
      chartCanvas,
    };
  },
};
</script>

<style scoped>
/* Vous pouvez ajouter des styles ici si nécessaire */
</style>
