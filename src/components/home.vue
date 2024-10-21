<script setup>
import { ref, onMounted } from 'vue';

// Constants for the typing effect
const TEXTS = ["Dev Web", "Accro au sport", "Alternant", "Développeur Vue", "Addict à la récup"];
const currentIndex = ref(0);
const currentTextIndex = ref(0);
const typingSpeed = 75;
const erasingSpeed = 50;
const pauseBetweenTexts = 1000;
const textElement = ref(null);

// Function to type text
const typeText = () => {
  const text = TEXTS[currentTextIndex.value];
  if (textElement.value && currentIndex.value < text.length) {
    textElement.value.textContent += text.charAt(currentIndex.value);
    currentIndex.value++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, pauseBetweenTexts);
  }
};

// Function to erase text
const eraseText = () => {
  if (textElement.value && currentIndex.value > 0) {
    textElement.value.textContent = textElement.value.textContent.slice(0, -1);
    currentIndex.value--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    // Move to the next text or loop back to the beginning
    currentTextIndex.value = (currentTextIndex.value + 1) % TEXTS.length;
    setTimeout(typeText, typingSpeed);
  }
};

// On component mount, initialize the typing effect
onMounted(() => {
  if (textElement.value) {
    textElement.value.textContent = "";
    typeText();
  }
});
</script>

<template>
  <section id="home" class="home">
    <div class="home_data">
      <h1 class="home_title">
        Hey !
        <br>
        Je suis Léo Demeilliers
        <br>
        <span ref="textElement"></span>
        <span class="blink-cursor">|</span>
      </h1>
    </div>
    <div class="home_img">
      <img src="/Moi.png" class="image-style" />
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
}
</script>

<style scoped>
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

.home {
  @apply grid grid-cols-1 gap-8 items-center md:grid-cols-2 gap-8 items-center h-screen;
}

.home_data {
  @apply pt-10 px-0 py-0 space-y-5;
}

.home_title {
  @apply text-3xl text-center font-bold;
}

.home_img {
  @apply flex items-center justify-center;
}

.image-style {
  @apply w-1/2 object-cover rounded-[20%];
}

@screen sm {
  .home {
    @apply grid-cols-2;
  }

  .home_data {
    @apply text-left px-20 py-80 space-y-5 font-bold;
  }

  .home_title {
    @apply text-6xl;
  }

  .home_img {
    @apply flex items-center justify-center;
  }

  .image-style {
    @apply w-96 h-auto;
  }
}
</style>
