<template>
  <div>
    <h1 class="titulo-1">Pokédex</h1>
    <input id="filter" v-model="filterText" placeholder="Buscar Pokémon..." />

    <div id="pokemon-container">
      <PokemonCard 
        v-for="pokemon in filteredPokemons" 
        :key="pokemon.id" 
        :pokemon="pokemon" 
        :theme="theme"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  theme: String
})
import { ref, computed, onMounted } from 'vue'
import { getRandomPokemons } from '../services/pokemonService'
import PokemonCard from '../components/PokemonCard.vue'

const allPokemons = ref([])
const filterText = ref('')

const filteredPokemons = computed(() => {
  return allPokemons.value.filter(p =>
    p.name.toLowerCase().includes(filterText.value.toLowerCase())
  )
})

async function loadPokemons() {
  allPokemons.value = await getRandomPokemons(10)
}

onMounted(() => {
  loadPokemons()
})
</script>

<style>
/* Filtro Buscar Pokémon */
#filter {
    padding: 10px;
    width: 200px;
    margin: 20px;
}

/* Contenedor de la Pokédex */
#pokemon-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 180px);
    gap: 15px;
    padding: 15px;
    justify-content: center;
}
</style>