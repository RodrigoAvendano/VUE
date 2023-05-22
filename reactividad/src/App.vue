<script setup>
  import { ref, computed } from 'vue';

  const name = "Vue dinámico";
  let counter = ref(0);

  const increment = () => {
    counter.value ++;
    colorCount();
  }

  function disminuir() {
    counter.value --;
    colorCount();
  }

  const resetear = () =>{
    counter.value = 0;
    colorCount();
  }

  const colorCount = computed(() => {
    if(counter.value < 0) {
      return 'negative';
    } else if (counter.value > 0){
      return 'positive';
    } else {
      return 'neutral'
    }
  });
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2 :class = "colorCount">{{ counter }}</h2>
  <section>
    <button @click = "disminuir">Disminuir</button>
    <button @click = "resetear">Formatear</button>
    <button @click = "increment">Aumentar</button>
  </section>
</template>

<style>
  h1 {
    color: red;
  }
  button {
    background-color: #3937d8;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 20px;
    margin: 0 10px;
  }
  .positive {
    color : green;
  }
  .negative {
    color: red;
  }
  .neutral {
    color: blue;
  }
</style>