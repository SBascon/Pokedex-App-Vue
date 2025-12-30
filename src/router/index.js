import { createRouter, createWebHistory } from 'vue-router'

import PokemonListView from '../views/PokemonListView.vue'
import PokemonDetailView from '../views/PokemonDetailView.vue'

const routes = [
  { path: '/', name: 'home', component: PokemonListView },
  { path: '/pokemon/:id', name: 'pokemon-detail', component: PokemonDetailView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router