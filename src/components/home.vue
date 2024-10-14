<script setup>
import { ref, onMounted } from 'vue';

const texts = ["Dev Web", "Accro au sport", "Alternant", "Développeur Vue", "Addict à la récup"];
const currentIndex = ref(0);
const currentTextIndex = ref(0);
const typingSpeed = 75;
const erasingSpeed = 50;
const pauseBetweenTexts = 1000;
const textElement = ref(null);

const typeText = () => {
  const text = texts[currentTextIndex.value];
  if (textElement.value && currentIndex.value < text.length) {
    textElement.value.textContent += text.charAt(currentIndex.value);
    currentIndex.value++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, pauseBetweenTexts);
  }
};

const eraseText = () => {
  if (textElement.value && currentIndex.value > 0) {
    textElement.value.textContent = textElement.value.textContent.slice(0, -1);
    currentIndex.value--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    // Passer au texte suivant ou revenir au début du tableau
    currentTextIndex.value = (currentTextIndex.value + 1) % texts.length;
    setTimeout(typeText, typingSpeed);
  }
};

onMounted(() => {
  // Réinitialiser le contenu de l'élément avant de commencer
  if (textElement.value) {
    textElement.value.textContent = "";
  }
  typeText();
});

</script>

<template>
  <div class="container grid grid-cols-2 h-screen bg-cover font-bold">
    <div class="py-80 px-30 space-y-5">

      <h1 class="text-6xl">Hey !</h1>
      <h1 class="text-6xl">Je suis Léo Demeilliers</h1>
      <h1 class="text-6xl">
        <span ref="textElement"></span>
        <span class="blink-cursor">|</span>
      </h1>

    </div>
    <div class=" flex items-center justify-center">
      <div class="relative w-96 h-120 ">
        <img src="/Moi.png"
             class="w-full h-full object-cover rounded-[20%] clip-octagon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>
  /* Animation pour le curseur clignotant */
  .blink-cursor {
    display: inline-block;
    margin-left: 2px;
    width: 1px;
    animation: blink 1s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
</style>