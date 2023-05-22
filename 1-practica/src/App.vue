<script setup>
import { ref, computed } from "vue";

let arrayNumbers = ref([]);
let status = ref(true);
let contador = ref(0);
let color = ref("green");

const aumentar = () => {
  contador.value++;
};

const disminuir = () => {
  contador.value--;
};

const comprobacion = () => {
  if(arrayNumbers.value.length > 0){
    status.value = true;
    for (let numero of arrayNumbers.value) {
      if(numero === contador.value) {
        status.value = false;
      }
    }
    if(status.value) {
      arrayNumbers.value.push(contador.value);
    }
  } else {
    arrayNumbers.value.push(contador.value);
  }
  const randomNumber = Math.floor(Math.random() * 5);
  switch(randomNumber) {
    case 0:
      color = "green"
      break;
    case 1:
      color = "purple"
      break;
    case 2:
      color = "red"
      break;
    case 3:
      color = "yellow"
      break;
    case 4:
      color = "blue"
      break;
    default: 
    color = "green"
      break;
  }
};

const classColor = computed(() => {
  return color;
});

const bloquear = computed(() => {
  const numSearch = arrayNumbers.value.find((num) => num === contador.value);
  return numSearch ? true : false;
});
</script>

<template>
  <div class="alert alert-danger alert-dismissible fade show" role="alert" v-show="!status">
    <strong>¡Oh oh!</strong> Este número ya ha sido ingresado.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <section class="container mt-3">
    <div class="row mt-3 d-flex align-items-center flex-row justify-content-center">
      <div class="p-2">
        <button @click= "disminuir" class="btn btn-danger"><h4>-</h4></button>
      </div>
      <div class="p-2">
        <label class = "label"><h4>{{ contador }}</h4></label>
      </div>
      <div class="p-2">
        <button @click= "aumentar" class="btn btn-success"><h4>+</h4></button>
      </div>
      <div class="p-2">
        <button @click= "comprobacion" class="btn btn-primary" :disabled="bloquear"><h4>Agregar</h4></button>
      </div>
    </div>
  </section>
  <section class="container numbers">
    <div class="row d-flex flex-row justify-content-center align-items-center">
      <template v-for = "(number) in arrayNumbers" 
      :key = "number">
        <div class="col d-flex justify-content-center" :class="classColor"><h4>{{ number }}</h4></div>
      </template>
    </div>
  </section>
</template>

<style>
.numbers {
  margin-top: 80px !important;
}
.green {
  background-color: rgb(107, 221, 107);
}
.purple {
  background-color: rgb(181, 116, 241);
}
.red {
  background-color: rgb(226, 127, 127);
}
.blue {
  background-color: rgb(139, 139, 240);
}
.yellow {
  background-color: rgb(225, 240, 139);
}
</style>

