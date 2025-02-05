<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuItems = [
  { href: "#home", label: "Qui suis-je ?" },
  { href: "#about", label: "Expériences" },
  { href: "#skills", label: "Projets" }
];

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav :class="['navbar', { 'navbar-scrolled': isSticky }]">
    <div class="navbar-name">
      <h1>Léo Demeilliers</h1>
    </div>

    <ul class="navbar-menu">
      <li v-for="(item, index) in menuItems" :key="index">
        <a :href="item.href">{{ item.label }}</a>
      </li>
    </ul>

    <div class="navbar-contact-container">
      <button class="navbar-contact">Contact</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  z-index: 1000;
  background-color: white;
  color: rgb(35, 45, 35);
  padding: 1rem;
  margin-top: 20px;
  border-radius: 20px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  font-size: 25px;
}


.navbar-name {
  font-weight: bold;
  margin-left: 10px;
}

.navbar-menu {
  list-style: none;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  gap: 40px;
}

.navbar-menu li a {
  text-decoration: none;
  color: rgb(35, 45, 35);
  transition: color 0.3s ease;
}

.navbar-menu li a:hover {
  color: rgb(35, 45, 35);
}

.navbar-contact-container {
  flex-shrink: 0;
}

.navbar-contact {
  background-color: rgb(231, 243, 230);
  color: rgb(35, 45, 35);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid rgb(35, 45, 35);
  cursor: pointer;
  transition: all 0.3s ease;
}

.navbar-contact:hover {
  background-color: rgb(35, 45, 35);
  color: rgb(231, 243, 230);
}
</style>
