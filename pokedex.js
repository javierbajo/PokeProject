
const pokedex$$ = document.getElementById('pokedex');
const numPokemons = 150;

const get = async (contador) => {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${contador}`);
        const res = await response.json();
        return res;
}
const mapearPokemons = (pokemon) => {
    return pokemon.map((pokemon) => ({
        nombre: pokemon.name,
        imagen: pokemon.sprites.front_default,
    }))
}

const draw = (pokemonMapeados) => {

    pokedex$$.innerHTML = "";
    for(const pokemon of pokemonMapeados){
        const li$$ = document.createElement('li');
        li$$.setAttribute('class','card');
        li$$.innerHTML = `
        <h2 class = 'card-title'>${pokemon.nombre}</h2>
        <img src="${pokemon.imagen}" alt="${pokemon.nombre}" class = "card-image">
        `
        pokedex$$.appendChild(li$$);
    }
}

const buscarPokemons = (filtro, pokemonMapeados) => {

    let pokemonFiltrados = pokemonMapeados.filter((pokemon) => pokemon.nombre.toLowerCase().includes(filtro.toLowerCase()));
    // le mando los pokemos filtrados a la función que pinta los pokemons
    draw(pokemonFiltrados);
};

const takeInput = (pokemonMapeados) => {

    const input$$ = document.querySelector('input');
    // creo un evento input y mando el contenido del input y el array de pokemons mapeados a la función buscarPokemons
    input$$.addEventListener('input', () => buscarPokemons(input$$.value, pokemonMapeados));
}

const init = async () => {

    const pokemons = [];
    // llamar a la función get 150 veces, una para cada URL
    for(let i = 1; i <= numPokemons; i++){
        pokemons.push(await get(i));
    }
    // hasta ahora tenemos en pokemons un array, en el que cada elemento tiene toda la información de un individuo
    // ahora lo vamos a mapear para quedarme con el nombre y la imagen
    const pokemonMapeados = mapearPokemons(pokemons);
    // ahora a ver si los pintamos
    draw(pokemonMapeados);
    // creamos un index en el html para filtrar pokemons
    takeInput(pokemonMapeados);
}

init();

