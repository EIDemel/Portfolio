<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <div v-if="!showContent" class="loading-screen flex items-center justify-center">
        <img
            :src="currentImage"
            alt="Loading"
            class="loading-image"
            key="loadingImage"
        />
      </div>
    </transition>

    <transition name="fade" @after-enter="onAfterEnter">
      <div v-if="showContent">
        <Hero />
        <Questionnaire />
        <Footer/>
      </div>
    </transition>
  </div>
</template>

<script>
import Questionnaire from './components/Questionnaire.vue';
import Hero from "./components/Home.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer,
    Hero,
    Questionnaire,
  },
  data() {
    return {
      showContent: false,
      images: [
        '/Image1.png',
        '/Image2.png',
        '/Image3.png',
      ],
      currentImage: '',
      currentIndex: 0,
    };
  },
  mounted() {
    this.currentImage = this.images[this.currentIndex];
    this.changeImage();

    setTimeout(() => {
      this.showContent = true;
    }, 2990); // Délai de 2 secondes
  },
  methods: {
    changeImage() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length; // Passer à l'image suivante
        this.currentImage = this.images[this.currentIndex];
      }, 1000); // Changer d'image toutes les 1 seconde (modifiable)
    },
    onAfterEnter() {
      // Actions après que le contenu soit entré (facultatif)
    },
  },
};
</script>

<style>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FEF8C5; /* Couleur de fond */
  z-index: 999; /* Assure que l'écran est au-dessus de tout le contenu */
  display: flex; /* Centre le contenu */
  align-items: center; /* Centre verticalement */
  justify-content: center; /* Centre horizontalement */
}

.loading-image {
  max-width: 80%; /* Ajuste la taille de l'image si nécessaire */
  max-height: 80%; /* Ajuste la taille de l'image si nécessaire */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease; /* Durée de la transition */
}
.fade-enter, .fade-leave-to {
  opacity: 0; /* Transparence à 0 pour l'effet de fondu */
}
</style>
