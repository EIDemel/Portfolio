<script setup>
</script>

<template>
  <section id="home" className="home">

    <div class="flex w-full h-screen">
      <!-- Première section à 5% de la largeur -->
      <div class="w-[5%] flex justify-center items-center h-full text-[#50636D]">
        <h1 className="home_vertical [writing-mode:vertical-lr]">
          Contact: leodemeillierspro@gmail.com
        </h1>
      </div>

      <!-- Deuxième section à 47.6% de la largeur -->
      <div class="w-[47.5%] home_data">
        <h1 className="home_title fancy-underline">
          MESSANA
        </h1>
        <h1 className="home_subtitle ">
          Le questionnaire qui va te permettre de découvrir quel athlète tu es !
        </h1>
        <button
            @click="scrollToQuestionnaire"
            type="button"
            class="text-[#50636D] border-2 border-[#50636D] rounded-full hover:duration-700 hover:bg-[#ACDBC9] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Le Questionnaire
        </button>
        <button
            @click="redirectToPortfolio"
            type="button"
            class="text-white bg-[#50636D] border-2 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Mon Portfolio
        </button>
      </div>
      <div class="w-[47.5%] home_img">
        <img src="/Logo.png" class="image-style" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  methods: {
    scrollToQuestionnaire() {
      // Cible la section avec l'ID 'questionnaire' et effectue un défilement en douceur
      const questionnaireSection = document.getElementById('questionnaire');
      if (questionnaireSection) {
        questionnaireSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    redirectToPortfolio() {
      window.open('https://leodemeilliers.netlify.app', '_blank');
    }
  }
};
</script>

<style scoped>


.home_data {
  @apply px-10 py-0 pr-60 space-y-5 text-[#50636D]; /* Ajustement du padding pour pousser le contenu légèrement à droite */
  margin-left: 10rem;
}

.home_title {
  @apply text-3xl text-left font-bold;
}

.home_subtitle {
  @apply text-xl text-left font-bold;
}

.home_vertical {
  @apply text-base text-left font-bold;
}

.home_img {
  @apply flex items-center justify-center;
}

.image-style {
  @apply w-1/2 object-cover rounded-[20%];
}

@screen sm {
  .home {
    @apply grid-cols-2;
  }

  .home_data {
    @apply text-left px-20 py-80 space-y-5 font-bold;
  }

  .home_title {
    @apply text-6xl;
  }

  .home_img {
    @apply flex items-center justify-center;
  }

  .image-style {
    @apply w-96 h-auto;
  }
}

.fancy-underline {
  position: relative; /* Position relative pour le parent */
  display: inline-block; /* Pour ajuster la taille de l'élément en fonction du contenu */
}

.fancy-underline::after {
  content: ''; /* Nécessaire pour créer le pseudo-élément */
  position: absolute;
  left: 0;
  bottom: 0; /* Aligne l'ombre au bas du texte */
  height: 0.3em; /* Hauteur de l'ombre */
  width: 105%;
  background-color: rgba(172, 219, 201, 0.75); /* Utilisation de la couleur pastel avec opacité */
  background-repeat: no-repeat;
  z-index: -1; /* Place le fond derrière le texte */
}
</style>