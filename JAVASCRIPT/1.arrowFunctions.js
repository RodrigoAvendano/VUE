// Function example

function sumar(a, b) {
  return a + b;
}

// Arrow Functions

const sumarDos = (a, b) => {
  return a + b ;
}

const sumarTres = (a, b) => a + b;

const sumarCuatro = (num = 1) => {
  console.log(num + 3);
}

const unParam = a => a + 100;

const mensaje = () => 'Hola mundo';

const resultado = unParam(3); 

console.log(sumarTres(4,5));

sumarCuatro();
sumarCuatro(5);

console.log(resultado);

console.log(mensaje());
