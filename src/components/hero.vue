<script setup>
import { ref, onMounted } from "vue";
import home from "./home.vue";
import about from "./about.vue";
import contact from "./contact.vue";
import skills from "./skills.vue";
import projects from "./projects.vue";

const links = [
  { name: "Home", url: "#home" },
  { name: "About", url: "#about" },
  { name: "Skills", url: "#skills" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "#contact" }
];

const activeLink = ref(links[0].url); // Initialiser le lien actif

const setActiveLink = (link) => {
  activeLink.value = link;
};

onMounted(() => {
  // Écouter le défilement pour mettre à jour le lien actif
  window.addEventListener("scroll", () => {
    links.forEach((link) => {
      const section = document.querySelector(link.url);
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 0 && bottom >= 0) {
          setActiveLink(link.url); // Définir le lien actif
        }
      }
    });
  });
});

const scrollToSection = (event, sectionId) => {
  event.preventDefault();
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <header class="fixed top-0 w-full z-10">
    <nav class="bg-white dark:bg-gray-900 container mx-auto flex justify-center items-center">
      <div class="flex items-center gap-20">
        <div class="flex items-center text-xl gap-2">
          <a
              v-for="(link, index) in links"
              :key="index"
              :href="link.url"
              @click="scrollToSection($event, link.url); setActiveLink(link.url)"
              :class="{'font-bold': activeLink === link.url}" 
          class="px-4 py-3"
          >
          {{ link.name }}
          </a>
        </div>
      </div>
    </nav>
  </header>

  <section id="home">
    <home />
  </section>

  <section id="about">
    <about />
  </section>

  <section id="skills">
    <skills />
  </section>

  <section id="projects">
    <projects />
  </section>

  <section id="contact">
    <contact />
  </section>
</template>

<style scoped>
/* Optionnel : ajoute des styles supplémentaires ici si nécessaire */
.font-bold {
  font-weight: bold; /* Assure-toi que la classe est définie ici */
}
</style>
