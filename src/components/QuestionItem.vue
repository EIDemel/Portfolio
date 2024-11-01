<template>
    <div class="mb-6 question-card">
    <label class="block text-lg font-medium mb-4 line-after text-[#50636D]">{{ question.text }}</label>
    <div class="flex space-x-4 flex items-center justify-center">
      <p class="text-xs mr-10">Pas D'accord</p>
      <label v-for="i in 5" :key="i" class="custom-radio ">
        <input
            type="radio"
            :value="i"
            v-model="question.response"
            class="radio-input"
            required
        />
        <span class="radio-style"></span>
      </label>
      <p class="text-xs ml-10"> D'accord </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
};
</script>
