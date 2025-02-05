<script setup>
/* 
   Pas forcément besoin de props dans cet exemple,
   mais vous pourriez en ajouter si vous voulez
   configurer la couleur, l’inclinaison, etc.
*/
</script>

<template>
  <div class="branch left"></div>
  <div class="branch right"></div>
</template>

<style scoped>
.branch {
  position: absolute;
  bottom: 0;        /* Pour partir du bas du conteneur */
  width: 10%;       /* Épaisseur de la branche */
  height: 100%;     /* Longueur de la branche, ajustez au besoin */
  background-color: rgb(110, 140, 110);
  transform-origin: bottom center; /* Pivot en bas (la pointe du V) */
  left: 50%;                       /* On part du centre */
  filter: blur(200px);
  -webkit-filter: blur(200px);
  -moz-filter: blur(200px);
  z-index: 1;
}

.left {
  transform: translateX(-50%) rotate(-45deg);
}

.right {
  transform: translateX(-50%) rotate(45deg);
}
</style>
