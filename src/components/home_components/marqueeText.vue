<template>
    <div class="marquee-container">
      <div class="top-left-text">
        Developpeur et Designer 
        <br>
        Freelance
      </div>
  
      <div class="marquee">
        LEO DEMEILLIERS 
        LEO DEMEILLIERS 
        LEO DEMEILLIERS 
        LEO DEMEILLIERS
      </div>
  
      <!-- Section "Descendez !" + flèche -->
      <div class="bottom-right-text">
        <span>Descendez !</span>
        <font-awesome-icon icon="fa-solid fa-arrow-down" class="arrow-anim"  />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Marquee"
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Sofia+Sans+Extra+Condensed:wght@300;400;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  
  .marquee-container {
    width: 100%;
    height: 70%;
    top: 15%;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    z-index: 2;
  }
  
  .marquee {
    font-family: 'Sofia Sans Extra Condensed', sans-serif;
    display: inline-block;
    font-size: 500px;
    font-weight: 900;
    transform: translate3d(0, 0, 0);
    will-change: transform;
    animation: marqueeScroll 24s linear infinite;
    color: rgb(35, 45, 35);
  }
  
  @keyframes marqueeScroll {
    0%   { transform: translateX(-75%); }
    100% { transform: translateX(0); }
  }
  
  .top-left-text {
    font-family: 'Roboto', sans-serif;
    position: absolute;
    top: 8%;
    left: 5%;
    color: rgb(35, 45, 35);
    font-size: 30px;
    padding: 10px;
    font-weight: 500;
  }
  
  .bottom-right-text {
    font-family: 'Roboto', sans-serif;
    position: absolute;
    bottom: 0%;
    right: 5%;
    color: rgb(35, 45, 35);
    font-size: 30px;
    padding: 10px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

    @keyframes arrowPulse {
        /* Début : taille normale */
        0% {
            transform: scale(1);
        }
        /* À 25% du temps : taille max */
        25% {
            transform: scale(1.3);
        }
        /* À 50% : retour à la taille normale */
        50% {
            transform: scale(1);
        }
        /* De 50% à 100% : reste immobile à taille normale (c'est la "pause") */
        100% {
            transform: scale(1);
        }
    }

    .arrow-anim {
        display: inline-block;
        animation: arrowPulse 5s infinite ease-in-out;
    }

  </style>
  