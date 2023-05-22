<script setup>
  const name = 'vue dinámico';
  const styleColor = 'color: blue';
  const arrayColores = ['red', 'blue', 'green'];
  const activo = true;
  const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
  const arrayFrutasDos = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 10,
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
    },
];
const objetoFruta = {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
}
//methods
const handleClick = (message, dia) => {
  alert(`${message} ${dia}`)
}
const handleClickDos = () => {
  alert("Hola mundo!")
}
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2 :style = "styleColor">Soy azul</h2>
  <h2 :style = "`color: ${arrayColores[2]}`">{{ arrayColores }}</h2>
  <h2>
    {{ activo ? 'Verdadero' : 'Falso' }}
  </h2>
  <p v-if = "activo">Este párrafo esta activo</p>
  <p v-else-if = "!activo">Este párrafo esta inactivo</p>
  <p v-else = "activo">Este párrafo esta presente</p>
  <ul>
    <!-- OPCION 1 DE FOR EN ARRAY -->
    <li v-for = "fruta of arrayFrutas">
      {{ fruta }}
    </li>
    <!-- OPCIÓN 2 DE FOR EN ARRAY -->
    <li v-for = "(fruta, index) of arrayFrutas" :key = "index">
      {{ index }} {{ fruta }}
    </li>
  </ul>
  <br>
  <ul>
    <li v-for = "fruta in arrayFrutasDos" :key = "fruta.name">
      {{ fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
    </li>
  </ul>
  <br>
  <!-- OBJETOS CON V-FOR-->
  <ul>
    <li v-for = "(value, propiedad, index) in objetoFruta" :key = "value">
      {{ index }} - {{ propiedad }} : {{ value }}
    </li>
  </ul>

  <!--V-IF TIENE PRIORIDAD EN V-FOR, POR ELLO SE USA UN TEMPLATE-->
  <template v-for = "frutas in arrayFrutasDos">
    <ul>
      <li v-if = "frutas.stock > 0">
        {{ frutas.name }} - {{ frutas.price }} = {{ frutas.stock }}
      </li>
    </ul>
  </template>
  <!-- V-ON- EVENTOS -->
  <button v-on:click = "handleClick('Me has dado click', 'Sábado')">Activame 1</button>
  <button @click = "handleClickDos">Activame 2</button>
  <button v-on:click.right.prevent = "handleClick('Click derecho', 'Domingo')">Activame 3</button>
</template>

<style>
  h1 {
    color: greenyellow;
  }
</style>
