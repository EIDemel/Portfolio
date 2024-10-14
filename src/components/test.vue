<script setup>
import * as THREE from 'three';
import { onMounted, ref } from 'vue';

const canvasRef = ref(null);

onMounted(() => {
  // Créer une scène
  const scene = new THREE.Scene();

  // Créer une caméra
  const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
  );
  camera.position.z = 5;

  // Créer le renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvasRef.value.appendChild(renderer.domElement);

  // Créer un cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Fonction d'animation
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();
});
</script>

<template>
  <section>
    <div class="container grid grid-cols-2">
      <!-- Div pour le rendu Three.js -->
      <div class="flex items-center justify-center h-screen" ref="canvasRef">
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ajoute des styles si nécessaire */
</style>
