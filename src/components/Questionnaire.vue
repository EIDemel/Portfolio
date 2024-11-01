<template>
  <section id="questionnaire">
    <div class="mx-auto p-6 uppercase text-6xl text-center bg-[#F8F8F8]">
      <div class="max-w-6xl mx-auto p-6 m-20">
        <h2 class="text-3xl font-semibold mb-4 text-[#50636D]" v-if="!resultsVisible">
          Catégorie : {{ categories[selectedCategory].name }}
        </h2>

        <!-- Affichage du formulaire de questions -->
        <form @submit.prevent="handleSubmit" v-if="!resultsVisible">
          <!-- Questions de la catégorie actuelle -->
          <QuestionItem
              v-for="(question, index) in categories[selectedCategory].questions"
              :key="index"
              :question="question"
          />

          <!-- Message d'alerte en cas de questions non répondues -->
          <div
              v-if="showAlert"
              class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
          >
            <span class="font-medium">Attention !</span> Veuillez répondre à toutes les questions avant de continuer.
          </div>

          <button
              v-if="selectedCategory > 0"
              type="button"
              @click="goToPreviousCategory"
              class="text-gray-900 border-2 border-black rounded-full hover:duration-700 hover:bg-[#ACDBC9] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium w-64 text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Précédent
          </button>

          <!-- Bouton Suivant ou Afficher les résultats -->
          <button
              type="submit"
              class="text-gray-900 border-2 border-black rounded-full hover:duration-700 hover:bg-[#ACDBC9] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium w-64 text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {{ selectedCategory < categories.length - 1 ? 'Suivant' : 'Afficher les résultats' }}
          </button>
        </form>

        <!-- Affichage des résultats -->
        <div v-if="resultsVisible" class="">
          <h2 class="text-3xl font-semibold mb-4">Résultats</h2>
          <RadarChart
              class="m-60"
              :chartData="radarChartData"
              :chartOptions="radarChartOptions"
          />
          <button
              @click="generatePDF"
              class="text-[#50636D] border-2 border-[#50636D] rounded-full hover:duration-700 hover:bg-[#ACDBC9] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Télécharger le PDF
          </button>
          <!-- Nouveau bouton pour recommencer le questionnaire -->
          <button
              @click="resetQuestionnaire"
              class="text-[#50636D] border-2 border-[#50636D] rounded-full hover:duration-700 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Recommencer le Questionnaire
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RadarChart from './RadarChart.vue';
import QuestionItem from './QuestionItem.vue';
import { categories } from '../data/categories.js';
import jsPDF from 'jspdf';

export default {
  components: {
    RadarChart,
    QuestionItem,
  },
  data() {
    return {
      selectedCategory: 0,
      resultsVisible: false,
      categories: categories,
      logoBase64: null,
      showAlert: false,
    };
  },
  computed: {
    radarChartData() {
      return {
        labels: this.categories.map(category => category.name),
        datasets: [
          {
            label: 'Score',
            data: this.categories.map(category => {
              const responses = category.questions.map(q => q.response);
              return responses.reduce((a, b) => (a || 0) + (b || 0), 0) / responses.length || 0;
            }),
            backgroundColor: 'rgba(172, 219, 201, 0.2)',
            borderColor: 'rgba(172, 219, 201, 1)',
            borderWidth: 1,
          },
        ],
      };
    },
    radarChartOptions() {
      return {
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5,
          },
        },
      };
    },
  },
  mounted() {
    this.loadLogo();
  },
  methods: {
    goToPreviousCategory() {
      if (this.selectedCategory > 0) {
        this.selectedCategory--;
      }
    },
    async loadLogo() {
      const response = await fetch('/Logo.png');
      const blob = await response.blob();
      const reader = new FileReader();

      reader.onloadend = () => {
        this.logoBase64 = reader.result;
      };

      reader.readAsDataURL(blob);
    },
    handleSubmit() {
      const allAnswered = this.categories[this.selectedCategory].questions.every(q => q.response !== undefined && q.response !== null);

      if (!allAnswered) {
        this.showAlert = true;
        return;
      }

      this.showAlert = false;

      if (this.selectedCategory < this.categories.length - 1) {
        this.selectedCategory++;

        // Scroller au début de la section
        this.$nextTick(() => {
          const section = this.$el.querySelector('.mx-auto');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        });
      } else {
        this.resultsVisible = true;
      }
    },
    generatePDF() {
      const doc = new jsPDF();

      const addHeader = () => {
        doc.setFontSize(12);
        doc.setTextColor("#50636D");
        doc.text("Résultats du Questionnaire d'Athlète", 10, 15);
        doc.line(10, 20, 200, 20);
        if (this.logoBase64) {
          doc.addImage(this.logoBase64, 'PNG', 170, 5, 12, 12);
        }
      };

      const addFooter = (pageNumber) => {
        doc.setFontSize(10);
        doc.setTextColor("#50636D");
        doc.text(`Page ${pageNumber}`, 100, 290, { align: 'center' });
        doc.line(10, 285, 200, 285);
      };

      const addBoldTextWithValue = (label, value, y) => {
        doc.setFont(undefined, 'bold');
        doc.text(label, 10, y);
        const labelWidth = doc.getTextWidth(label);
        doc.setFont(undefined, 'normal');
        const wrappedText = doc.splitTextToSize(value, 180 - labelWidth);
        doc.text(wrappedText, 10 + 23 + 2, y);
        return y + wrappedText.length * 4.2;
      };

      this.categories.forEach((category, index) => {
        if (index > 0) doc.addPage();
        addHeader();
        addFooter(index + 1);
        const score = this.calculateScore(category);
        let level;
        const categoryLevels = category.Scores;

        if (categoryLevels) {
          level = categoryLevels.find(l => score >= l.min && score <= l.max);
        }
        let currentY = 30;
        currentY = addBoldTextWithValue("Catégorie : ", category.name, currentY);
        currentY = addBoldTextWithValue("Niveau : ", level.ScoreLabel + '', currentY);
        currentY = addBoldTextWithValue("Description : ", level.ScoreDefinition + '', currentY);
        currentY = addBoldTextWithValue("Définition : ", category.definition, currentY);
        currentY = addBoldTextWithValue("Rôle : ", category.role, currentY);
      });

      doc.save('resultats_questionnaire.pdf');
    },
    resetQuestionnaire() {
      this.selectedCategory = 0;
      this.resultsVisible = false;
      this.categories.forEach(category => {
        category.questions.forEach(question => {
          question.response = null;
        });
      });
      this.showAlert = false;
    },
    calculateScore(category) {
      const responses = category.questions.map(q => q.response);
      return responses.reduce((a, b) => (a || 0) + (b || 0), 0) || 0;
    },
  },
};
</script>
