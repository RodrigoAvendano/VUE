# mi-pimer-vue

### ¿Como construir un proyecto de Vue?

1- El primer paso es utilizar el comando:

> npm init vue@latest

2- Se mostrarán diferentes opciones de configuración, elige las que sean necesarias, coloca el nombre de tu proyecto y posteriormente muevete a la carpeta donde se encuentra

> cd `<nombre-de-tu-proyecto>`

3- Configuración del Proyecto

> npm install

4- Compila y realiza un hot-reload para su desarrollo

> npm run dev

### Sintaxis de Plantila

Vue utiliza una sintaxis de plantilla basada en HTML que le permite vincular declarativamente el DOM.

Una de las ventajas de la sección `<template>` de los **componentes SFC(**Single File Components**) de Vue** es que no sólo permite escribir HTML clásico, sino que además cuenta con una sintaxis avanzada para realizar algunas características que lo hacen mucho más potente que el HTML puro, como por ejemplo, el uso de  ***directivas*** .

### Directivas

Las ***directivas*** son atributos especiales que se colocan en las etiquetas HTML y están prefijados por **v-.**
Estas directivas permiten realizar acciones dinámicas que no se pueden realizar en HTML por si solo, pero que Vue permite utilizar en sus etiquetas `<template>.`

Las directivas se forman de diferentes partes:

```javascript
<button v-on: click.stop = "dohTis"></button>
```

* button: Etiqueta
* v-on: Directiva
* click: Nombre
* .stop: Modificador de comportamiento
* doThis: Valor - En ciertas directivas, se requiere establecer un valor. Se escribe como el valor de un atributo HTML.

### Interpolación de Texto

También se le llama _bigote_ o *llaves dobles*, con estos se puede insertar valores en una plantilla. En el siguiente ejemplo tenemos una comstante name con el valor "Vue 3", podemos pasar este valor a nuestra plantilla con el nombre de la constante dentro de las llaves dobles.

```javascript
<script setup>
const name = 'Vue 3';
</script>

<template>
    <h1>Hola {{name}}!<h1>
</template>
```

### Enlaces de Atributos

Los _bigotes_ o _llaves dobles_ no se pueden insertar dentro de los atributos HTML.
Los atributos se agregan a una etiqueta de HTML para proporcionar al navegador más información sobre como debe aparecer o comportarse la etiqueta. Podemos utilizar para esto un enlace de atributo mediante la directiva **v-bind** que se encargará de enlazar o bindear el valor de un atributo específico de una  etiqueta HTML.

```javascript
<script setup>
    const name = "Vue 3";
    const styleColor = "color: red;";
</script>
<template>
    <h1>Hola {{ name }}!</h1>
    <h2 v-bind:style="styleColor">Hola {{ name }}</h2>
</template>
```

Debido a que **_v-bind_** se usa con tanta frecuencia, tiene una sintaxis abreviada dedicada:

```javascript
<h2 :style="styleColor">Hola {{ name }}</h2>
```

### Bindeo Dinámico

En algunos casos que nos interesen, podríamos utilizar los corchetes [] para indicar que recoja el atributo de una variable, pudiendo hacer este proceso aún más dinámico.

```javascript
<template>
  <div>
    <img v-bind:src="image" v-bind:[key]="text">
    <img :src="image" :[key]="text"> <!-- Equivalente al anterior -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: "alt",
      image: "https://lenguajejs.com/javascript/logo.svg",
      text: "Logo de Javascript"
    }
  }
}
</script>
```

En este caso se obtiene el atributo **alt = "Logo de Javascript",** si se cambiara **key** por **title** se obtendría el atributo **title = "Logo de Javascript".**

### Bindeo de Objetos

Otro caso puede ser el de enlazar completamente una etiqueta HTML con un objeto que tenemos en las variables de Vue. De esta forma actualizamos la etiqueta completa simplemente actualizando desde Javascript. Este sería el ejemplo anterior aplicando este concepto:

```javascript
<template>
  <div>
    <img v-bind="image">
    <img :="image"> <!-- Equivalente al anterior -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: {
        src: "https://lenguajejs.com/javascript/logo.svg",
        alt: "Logo de Javascript"
      }
    }
  }
}
</script>
```

Lo importante en este ejemplo es darse cuenta que las claves (***propiedades***) del objeto deben coincidir con los atributos que queremos utilizar.

### Uso de Expresiones de Js

Las expresiones de JavaScript se pueden usar en las plantillas de Vue.
Una *expresión* es cualquier unidad de código válida que se resuelve en un valor.
Toda expresión sintácticamente válida se resuelve en algún valor, pero conceptualmente, hay dos tipos de expresiones: con efectos secundarios (por ejemplo: las que asignan valor a una variable) y las que en algún sentido evalúan y por lo tanto se resuelven en un valor.

```javascript
<script setup>
    const name = "Vue 3";
    const styleColor = "color: red;";
    const active = true;
    const colors = ["blue", "red", "green"];
    const counter = 1;
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <h2 :style="styleColor">Hola {{ name.toUpperCase() }}</h2>
    <h3>{{ active ? "Estoy activado" : "Estoy desactivado" }}</h3>
    <h4 :style="`color: ${colors[2]}`">Color con interpolación</h4>
    <h5>Contador: {{ counter + 1 }}</h5>
</template>
```

Cada enlace solo puede contener **UNA** sola expresión , lo siguiente **NO** funcionará:

```javascript
<p>{{if(active) {return counter}}}</p>
```

### Directivas Condicionales

##### v-if

La directiva **v-if** se usa para mostrar o ocultar un elemento de la plantilla.

```javascript
<script setup>
    const name = "Vue 3";
    const active = true;
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <h2 v-if="active">v-if en acción</h2>
</template>
```

**v-else**

Un elemento **v-else** debe seguir ***inmediatamente*** a un elemento **v-if** o un **v-else-if**; de lo contrario, no se reconocerá.

```javascript
<script setup>
    const name = "Vue 3";
    const active = false;
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <h2 v-if="active">v-if en acción</h2>
    <h2 v-else>v-else en acción</h2>
</template>
```

```javascript
<script setup>
    const name = "Vue 3";
    const active = null;
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <h2 v-if="active === true">Estoy en true</h2>
    <h2 v-else-if="active === false">Estoy en false</h2>
    <h2 v-else>Estoy indeciso</h2>
</template>
```

Si el código se colocara de la siguiente forma provocaría un error:

```javascript
<h2 v-if="active === true">Estoy en true</h2>
    <h2 v-else-if="active === false">Estoy en false</h2>
    <p>Lorem ipsum dolor sit</p>
    <h2 v-else>Estoy indeciso</h2>
```

**v-show**

La diferencia que tiene esta plantilla con **v-if** es que cambia la propiedad display de CSS.
En términos generales, **v-if** tiene costos de alternancia más altos mientras que **v-show** tiene costos de renderización inicial más altos. Así que prefiera **v-show** si necesita alternar algo con mucha frecuencia, y prefiera **v-if** si es poco probable que la condición cambie en el tiempo de ejecución.

```javascript
<script setup>
    const name = "Vue 3";
    const active = false;
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <h2 v-show="active">Estoy en true</h2>
</template>
```

##### v-for

La directiva **v-for** se usa para iterar sobre una lista de elementos.
Para darle a Vue una pista para que pueda rastrear la identidad de cada nodo y, por lo tanto, reutilizar y reordenar los elementos existentes se debe proporcionar un atributo **key** único para cada elemento.

```javascript
<script setup>
    const name = "Vue 3";
    const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <ul>
        <li v-for="(fruta, index) in arrayFrutas" :key="index">
            {{ index }} {{ fruta }}
        </li>
    </ul>
</template>
```

El resultado de esto sería:

* 0 🍎
* 1 🍌
* 2 🍉
* 3 🍓
* 4 🍒

```javascript
<script setup>
    const name = "Vue 3";
    const arrayFrutas = [
        {
            name: "Manzana",
            price: "$1.00",
            description: "Una manzana",
        },
        {
            name: "Pera",
            price: "$2.00",
            description: "Una pera",
        },
        {
            name: "Naranja",
            price: "$3.00",
            description: "Una naranja",
        },
    ];
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <ul>
        <li v-for="fruta in arrayFrutas" :key="name">
            {{ fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
        </li>
    </ul>
</template>
```

El resultado de esto sería:

* Manzana - $1.00 - Una manzana
* Pera - $2.00 - Una pera
* Naranja - $3.00 - Una naranja

***Objetos***

```javascript
<script setup>
    const name = "Vue 3";

    const fruta = {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
    };
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <ul>
        <li v-for="(value, propiedad, index) in fruta">
            {{ index }} - {{ propiedad }} : {{ value }}
        </li>
    </ul>
</template>
```

El resultado sería:

* 0 - name : Naranja
* 1 - price : $3.00
* 2 - description : Una naranja
* 3 - stock : 20

##### v-for / v-if

Cuando existen en el mismo nodo, **v-if** tiene una prioridad más alta que  **v-for,** eso significa que la condición **v-if** no tendrá acceso a las variables del alcance de  **v-for**. La solución es utilizar `<template>`

```javascript
<ul>
    <template v-for="fruta in arrayFrutas" :key="fruta.name">
        <li v-if="fruta.stock > 0">
            {{ fruta }}
        </li>
    </template>
</ul>
```

### Eventos

Podemos usar la directiva  **v-on** , que normalmente acortamos al símbolo  **@** , para escuchar eventos DOM y ejecutar JavaScript cuando se activan. El uso sería **v-on:click = "handler"** o **@click = "handler"**.

```javascript
<script setup>
    const name = "Vue 3";

    // método handleClick
    const handleClick = () => {
        console.log("me diste cick");
    };
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <button v-on:click="handleClick">Click aquí</button>
    <button @click="handleClick">Click aquí</button>
</template>
```

***Párametros***

```javascript
<script setup>
    const name = "Vue 3";

    const handleClick = (message) => {
        console.log(message);
    };
</script>

<template>
    <h1>Hola {{ name }}!</h1>
    <button @click="handleClick('Mensaje desde botón')">Click aquí</button>
</template>
```

***Modificadores***

```javascript
<button @click.right.prevent="handleClick('Mensaje desde botón')">
    Click right
</button>
<button @click.middle="handleClick('Mensaje desde botón')">
    Click middle
</button>
```

---

### Referencias

* [Bluuweb](https://bluuweb.github.io/vue-udemy/30-01-fundamentos/#objetivos)
* [Directivas](https://lenguajejs.com/vuejs/directivas-vue/que-son-directivas/)
* [Atributos HTML](https://htmldesdecero.es/atributos/#:~:text=Los%20atributos%20se%20agregan%20a,%22color%3Ablack%22%20%2C.)
* [V-Bind](https://lenguajejs.com/vuejs/directivas-vue/v-bind/)
