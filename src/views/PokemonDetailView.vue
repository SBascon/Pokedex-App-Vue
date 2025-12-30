<template>
  <div v-if="pokemon" class="card" :style="cardStyle">
    <h1 class="titulo-nombre-pokemon" :style="{ color: props.theme === 'oscuro' ? 'white' : 'black' }">
      {{ pokemon.name }}
    </h1>
    <img :src="pokemon.sprites.front_default" />
    
    <p class="pokemon-stat" :style="{ color: props.theme === 'oscuro' ? 'white' : 'black' }">
      Ataque: {{ pokemon.stats[1].base_stat }}
    </p>
    <p class="pokemon-stat" :style="{ color: props.theme === 'oscuro' ? 'white' : 'black' }">
      Defensa: {{ pokemon.stats[2].base_stat }}
    </p>
    <p class="pokemon-stat" :style="{ color: props.theme === 'oscuro' ? 'white' : 'black' }">
      Tipo: {{ pokemon.types.map(t => t.type.name).join(', ') }}
    </p>

    <router-link to="/">
      <button>Volver</button>
    </router-link>
  </div>

  <div v-else>
    <p>Cargando Pokémon...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPokemon } from '../services/pokemonService'

// Recibimos theme como prop
const props = defineProps({
  theme: String
})

const route = useRoute()
const pokemon = ref(null)

// Cargar Pokémon por id
async function loadPokemon() {
  const id = route.params.id
  if (id) {
    pokemon.value = await getPokemon(id)
  }
}

onMounted(() => loadPokemon())

// Computed para el fondo dinámico de la tarjeta
const cardStyle = computed(() => ({
  backgroundImage: props.theme === 'oscuro'
    ? 'url(/assets/img/fondo-pokemon-2.jpg)'
    : 'url(/assets/img/fondo-pokemon.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: '6px solid black',
  borderRadius: '10px',
  padding: '15px',
  boxShadow: '0 0 10px 5px white',
  maxWidth: '150px',
  margin: '40px auto'
}))
</script>

<style scoped>
.card img {
  width: 100px;
}
</style>

