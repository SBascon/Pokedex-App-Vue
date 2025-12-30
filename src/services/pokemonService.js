const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export async function getPokemon(id) {
  const res = await fetch(`${BASE_URL}/${id}`)
  return await res.json()
}

export async function getRandomPokemons(count = 10) {
  const pokemons = []
  for (let i = 0; i < count; i++) {
    const id = Math.floor(Math.random() * 151) + 1
    const pokemon = await getPokemon(id)
    pokemons.push(pokemon)
  }
  return pokemons
}
