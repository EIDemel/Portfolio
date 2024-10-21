<script setup>
import Hero from "./components/hero.vue";
import About from "./components/about.vue";
import Skills from "./components/skills.vue";
import Contact from "./components/contact.vue";
import Footer from "./components/footer.vue";
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
</script>
<template>
  <Hero/>
  <About/>
  <Skills/>
  <Contact/>
  <Footer/>

</template>
