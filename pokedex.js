

console.log('buenas noches bienvenidos');

const pokedex$$ = document.getElementById('pokedex');
pokedex$$.innerHTML = 'hola amigo';


const numPokemons = 150;
const pokemons = [];

const get = async (contador) => {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${contador}`);
        const res = await response.json();
        //console.log(res);
        return res;
}

const mapearPokemons = (pokemon) => {
    return pokemon.map((pokemon) => ({
        nombre: pokemon.name,
        imagen: pokemon.sprites.front_default,
    }))
}

const init = async () => {

    for(let i = 1; i <= numPokemons; i++){
        pokemons.push(await get(i));
    }
    // hasta ahora tenemos en pokemons un array, en el que cada elemento tiene toda la información de un individuo
    console.log(pokemons.length)
    console.log(pokemons)
    // ahora lo vamos a mapear para quedarme con el nombre y la imagen
    const pokemonMapeados = mapearPokemons(pokemons);
    console.log(pokemonMapeados);
    // ahora a ver si los pintamos

}

init();

