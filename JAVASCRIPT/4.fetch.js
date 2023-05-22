fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then( (data) => {
        console.log(data.results);
        data.results.forEach(element => {
            const {name} = element;
            console.log(name);
        })
    })
    .catch(error => console.log(error));

//async await

const getPokemon = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json();
        const arrayNombres = data.results.map(poke => poke.name);
        const bulbasaur = data.results.filter(poke => poke.name === 'bulbasaur');
        const noBulbasaur = data.results.filter(poke => poke.name !== 'bulbasaur' );
        console.log(arrayNombres);
        console.log(bulbasaur);
        console.log(noBulbasaur);
    } catch (error) {
        console.log(error);
    }
}

getPokemon();