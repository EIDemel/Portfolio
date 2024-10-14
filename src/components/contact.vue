<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  const subject = 'Contact Form Submission';
  const body = `Nom: ${lastName.value}\nPrénom: ${firstName.value}\nEmail: ${email.value}\nMessage: ${message.value}`;

  const mailtoLink = `mailto:leodemeillierspro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink; // Ouvrir le client de messagerie
};
</script>

<template>
  <div class="h-screen grid grid-rows-20-80">
    <div class="flex items-center justify-center py-40">
      <h1 class="text-6xl underline font-bold">Contact</h1>
    </div>
    <div class="py-80 px-30 flex justify-center items-center">
      <form class="w-full max-w-lg px-4" @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-medium text-gray-700">Prénom</label>
          <input
              v-model="firstName"
              type="text"
              id="firstName"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div class="mb-4">
          <label for="lastName" class="block text-sm font-medium text-gray-700">Nom</label>
          <input
              v-model="lastName"
              type="text"
              id="lastName"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
              v-model="email"
              type="email"
              id="email"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
              v-model="message"
              id="message"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="4"
          ></textarea>
        </div>
        <button
            type="submit"
            class="bg-blue-500 text-white rounded-md px-4 py-2"
        >
          Envoyer
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}

/* Ajout de la classe personnalisée */
.grid-rows-20-80 {
  grid-template-rows: 20% 80%;
}

</style>

<script>
export default {
  name: "contact"
}
</script>
