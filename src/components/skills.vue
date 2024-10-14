<script setup>
import { ref, onMounted } from "vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// Ajoutez l'icône à la bibliothèque
library.add(faCoffee);

// Références et données
const skillsRef = ref(null);
const cards = ref([]);

// Définissez un tableau de compétences
const skills = ref([
  { name: "TAILWIND" },  // Remplacez par l'icône souhaitée
  { name: "NODE JS"},
  { name: "JavaScript" },
  { name: "SPRING BOOT  "},
  { name: "POSTGRESQL"},
  { name: "THREEJS"},
]);

onMounted(() => {
  // Créer un observer pour détecter quand la section est visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Ajouter une classe qui déclenche l'animation sur toutes les cartes
        cards.value.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 400); // Délai entre chaque carte
        });
        observer.unobserve(skillsRef.value);
      }
    });
  });

  if (skillsRef.value) {
    observer.observe(skillsRef.value);
  }
});
</script>

<template>
  <div class="grid grid-rows-20-80">
    <div class="flex items-center justify-center pt-40">
      <h1 class="text-6xl underline font-bold">Skills</h1>
    </div>
    <section id="skills" ref="skillsRef" class="pt-40 grid grid-cols-3 gap-4 p-8">
      <div
          v-for="(skill, index) in skills"
          :key="index"
          class="card opacity-0 transform transition-all duration-500 flex items-center justify-center text-3xl"
          ref="cards"
      >
        {{ skill.name }}
      </div>
    </section>
  </div>
</template>

<style scoped>
.card {
  padding: 10px;
  border-style: solid;
  border-color: black;
  border-bottom-width: 2px; /* Ajoute cette ligne */
  background-color: white; /* Ajoute un fond de couleur différente */
  transform: translateY(20px);
  border-radius: 8px;
}

.card.show {
  opacity: 1;
  transform: translateY(0);
}

.grid-rows-20-80 {
  grid-template-rows: 20% 80%;
}
</style>
