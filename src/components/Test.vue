<template>
  <div>
    <h1>Graphique Radar</h1>
    <RadarChart :chartData="chartData" :chartOptions="chartOptions" />
  </div>
</template>

<script>
import RadarChart from './RadarChart.vue';

export default {
  components: {
    RadarChart,
  },
  data() {
    return {
      chartData: {
        labels: ['Énergie', 'Concentration', 'Satisfaction', 'Créativité', 'Engagement', 'Test'],
        datasets: [
          {
            label: 'Score',
            backgroundColor: 'rgba(66, 165, 245, 0.2)', // Couleur de fond
            borderColor: 'rgba(66, 165, 245, 1)', // Couleur de la bordure
            pointBackgroundColor: 'rgba(66, 165, 245, 1)', // Couleur des points
            data: [4, 3, 5, 2, 4, 5], // Remplacez par vos données
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scale: {
          ticks: {
            beginAtZero: true, // Commencer les ticks à 0
            max: 100, // Valeur maximale
          },
        },
      },
    };
  },
};
</script>

<style scoped>
/* Styles globaux si nécessaire */
</style>
