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
  <header class="fixed top-0 w-full z-10">
    <nav class="bg-white dark:bg-gray-900 container mx-auto flex justify-between md:justify-center items-center p-4">
      <button class="block md:hidden" @click="isMenuOpen = !isMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="w-full md:w-auto md:flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <a
            v-for="(link, index) in links"
            :key="index"
            :href="link.url"
            @click="scrollToSection($event, link.url); setActiveLink(link.url)"
            :class="{'font-bold': activeLink === link.url}"
            class="px-4 py-2 block md:inline-block text-gray-700 dark:text-white hover:underline"
        >
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>

  <body>
      <home />
  </body>
</template>

<style scoped>
.font-bold {
  font-weight: bold;
}
</style>
