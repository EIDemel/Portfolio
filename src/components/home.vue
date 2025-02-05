<script setup>
import marqueeText from "./home_components/marqueeText.vue";
import Branches from "./home_components/branches.vue";
import MyImage from "./home_components/myImage.vue";
</script>

<template>
  <div class="home">
    <marqueeText />
    <MyImage />   <!-- Sous-composant dédié à l’image -->
    <Branches />
  </div>
</template>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
</style>
