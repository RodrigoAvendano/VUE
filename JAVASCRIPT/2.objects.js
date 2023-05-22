const mutante = {
    nombre: 'Erik Lehnsherr',
    alias: 'Magneto',
    edad: 60,
    vivo: true,
    nivel: 'omega'
}

console.log(mutante);

mutante.id = 1;
mutante.habilidad = ['Magnetismo', 'Electromagnetismo','Campos magneticos'];
const habilidadUno = mutante.habilidad[0];

console.log(mutante);
console.log(mutante.nombre);
console.log(habilidadUno);