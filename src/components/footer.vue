<template>

  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <!-- Section de navigation -->
      <div class="mb-4 md:mb-0">
        <ul class="flex flex-wrap gap-4">
          <li><a href="#home" class="hover:text-gray-400">Accueil</a></li>
          <li><a href="#about" class="hover:text-gray-400">À propos</a></li>
          <li><a href="#skills" class="hover:text-gray-400">Compétences</a></li>
          <li><a href="#contact" class="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>

      <!-- Section des liens sociaux -->
      <div class="mb-4 md:mb-0 flex gap-4">
        <a href="https://github.com/EIDemel" aria-label="GitHub" class="hover:text-gray-400">
          <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.086-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.005-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.625-5.479 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.594 24 12.297c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/l%C3%A9o-demeilliers-1417581b8/" aria-label="LinkedIn" class="hover:text-gray-400">
          <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.451 20.451h-3.554v-5.569c0-1.327-.027-3.038-1.852-3.038-1.854 0-2.138 1.448-2.138 2.944v5.663h-3.555V9h3.415v1.561h.048c.475-.897 1.632-1.842 3.361-1.842 3.595 0 4.257 2.365 4.257 5.441v6.291h-.002zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.07S4.193 3.293 5.337 3.293c1.142 0 2.07.928 2.07 2.07s-.927 2.07-2.07 2.07zm-1.777 13.018h3.554V9h-3.554v11.451zM22.225 0H1.775C.796 0 0 .795 0 1.775v20.451c0 .98.796 1.774 1.775 1.774h20.451c.979 0 1.774-.794 1.774-1.774V1.775C24 .795 23.204 0 22.225 0z"/>
          </svg>
        </a>
      </div>

      <!-- Copyright -->
      <div class="text-sm">
        &copy; 2024 Léo Demeilliers. Tous droits réservés.
      </div>
    </div>
  </footer>


</template>

<script>
export default {
  name: "footer"
}
</script>

<style scoped>

</style>