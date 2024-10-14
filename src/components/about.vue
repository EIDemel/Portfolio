<script setup>
import * as THREE from 'three';
import { onMounted, ref } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const canvasRef = ref(null);

onMounted(() => {
  // Créer une scène
  const scene = new THREE.Scene();

  // Créer une caméra
  const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.value.clientWidth / canvasRef.value.clientHeight,
      1,
      2000
  );
  camera.position.z = 7;

  // Créer le renderer avec un fond transparent
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(canvasRef.value.clientWidth, canvasRef.value.clientHeight);
  canvasRef.value.appendChild(renderer.domElement);

  // Ajouter un éclairage
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5).normalize();
  scene.add(light);

  // Charger le modèle GLB
  const loader = new GLTFLoader();
  let model;
  loader.load('/lightning_mcqueen.glb', (gltf) => {
    model = gltf.scene;

    // Ajuster la rotation initiale du modèle

    model.rotation.x = Math.PI / 12; // Inclinaison sur l'axe Z (en radians)
    model.rotation.z = Math.PI / 12; // Inclinaison sur l'axe Z (en radians)

    scene.add(model);
  }, undefined, (error) => {
    console.error('Erreur lors du chargement du modèle :', error);
  });

  // Fonction d'animation
  const animate = () => {
    requestAnimationFrame(animate);

    // Si le modèle est chargé, on le fait tourner
    if (model) {
      model.rotation.y += 0.005; // Ajuste cette valeur pour contrôler la vitesse de rotation
    }

    renderer.render(scene, camera);
  };

  animate();
});
</script>

<template>
  <div class="h-screen grid grid-rows-20-80">
    <div class="flex items-center justify-center py-40">
      <h1 class="text-6xl underline font-bold">About</h1>
    </div>
    <div>
      <div class="container grid grid-cols-2 bg-cover h-full ">
        <div>
          <h1 class="text-5xl pt-20 text-justify	">Bonjour</h1>
          <p class="py-10 text-justify	">
            Je m'appelle Léo Demeilliers, actuellement en Master 1 Ingénierie du Web à l'ESGI et en recherche d'une alternance pour approfondir mes compétences dans le développement web. Originaire de Caen, je souhaite découvrir la vie lilloise à travers une expérience professionnelle enrichissante. Le sport, notamment l'athlétisme, occupe une place importante dans ma vie, et je me prépare activement à un triathlon M, un défi personnel qui me motive énormément. En dehors du sport, j'apprécie le bricolage, ce qui m’a permis de développer un sens précis de la minutie et de la créativité, des compétences que j’intègre volontiers dans mes projets.
          </p>

          <p class="text-justify">
            Les jeux vidéo font également partie de mes passions, stimulant mon esprit d’analyse et ma capacité à résoudre des problèmes complexes. Mes compétences techniques sont détaillées dans mon CV, je préfère donc, ici, mettre en avant ma motivation et ma curiosité. Intégrer une équipe dynamique et m’impliquer dans des projets innovants serait pour moi l’opportunité idéale. Je serais ravi de discuter de vive voix avec vous pour vous présenter en détail mon parcours, mes compétences et mes passions, et pour explorer ensemble les perspectives de collaboration que nous pourrions développer.
          </p>
        </div>
        <div class="mcqueen grid grid-rows-80-20">
          <div ref="canvasRef" class="w-full h-full"></div>
          <div  class="flex items-center justify-center ">

            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
            </svg>
            <p class="font-mono items-center justify-center text-4xl" > C'est pas moi</p>

            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

/* Ajout de la classe personnalisée */
.grid-rows-20-80 {
  grid-template-rows: 20% 80%;
}

.grid-rows-80-20 {
  grid-template-rows: 80% 20%;
}

.mcqueen {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
