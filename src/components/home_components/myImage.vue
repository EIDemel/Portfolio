<script setup>
// Pas de props particulières ici, 
// mais on pourrait imaginer en ajouter si nécessaire.
</script>

<template>
  <div class="image-container">
    <img src="../../../public/moi.png" alt="Leo Demeilliers" />
  </div>
</template>

<style scoped>
.image-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

img {
  width: 90%;
  display: block;
}
</style>
