<template>
  <div :class="['card', theme]" :style="cardStyle">
    <h1 class="titulo-nombre-pokemon">{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" />
    <p class="pokemon-stat">Ataque: {{ pokemon.stats[1].base_stat }}</p>
    <p class="pokemon-stat">Defensa: {{ pokemon.stats[2].base_stat }}</p>
    <router-link :to="`/pokemon/${pokemon.id}`">
      <button>Ver más</button>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Una sola llamada a defineProps()
const props = defineProps({
  pokemon: Object,
  theme: { type: String, default: 'claro' }
})

// Computed para cambiar la imagen de fondo según el tema
const cardStyle = computed(() => {
  return {
    backgroundImage: props.theme === 'oscuro'
      ? 'url(/assets/img/fondo-pokemon-2.jpg)'
      : 'url(/assets/img/fondo-pokemon.jpg)'
  }
})
</script>

<style>
.card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 6px solid black;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 0 10px 5px gray;
}

.card img {
  width: 100px;
}

/* Nombre Pokémon específico en detalle */
.titulo-nombre-pokemon {
    font-size: 1.3rem;
}
</style>


