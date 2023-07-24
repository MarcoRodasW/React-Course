const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20'

export async function getPokemons(){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await res.json();

    return data
}