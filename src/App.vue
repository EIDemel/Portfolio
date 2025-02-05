<script setup>
import Home from "./components/home.vue";
import Navbar from "./components/navbar.vue";
import About from "./components/about.vue";
import Skills from "./components/skills.vue";
import Contact from "./components/contact.vue";
import Footer from "./components/footer.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
</script>
<template>
  <Navbar/>
  <Home/>
  <!-- <About/> -->

</template>
