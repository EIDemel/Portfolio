<script setup>
import { ref, onMounted } from "vue";
import home from "./home.vue";
import about from "./about.vue";
import contact from "./contact.vue";
import skills from "./skills.vue";
import projects from "./projects.vue";

const links = [
  { name: "Accueil", url: "#home" },
  { name: "À propos", url: "#about" },
  { name: "Compétences", url: "#skills" },
  { name: "Projets", url: "#projects" },
  { name: "Contact", url: "#contact" }
];

const activeLink = ref(links[0].url);
const isMenuOpen = ref(false);

const setActiveLink = (link) => {
  activeLink.value = link;
  isMenuOpen.value = false; // Ferme le menu après avoir cliqué sur un lien
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    links.forEach((link) => {
      const section = document.querySelector(link.url);
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 0 && bottom >= 0) {
          setActiveLink(link.url);
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
};
</script>

<template>
  <body>
      <home />
  </body>
</template>

<style scoped>
.font-bold {
  font-weight: bold;
}
</style>
