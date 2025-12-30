<template>
  <div id="app" :class="theme">
    <nav>
      <div class="nav-links">
        <router-link to="/">Inicio</router-link>
      </div>

      <!-- Selector de tema: RADIO BUTTONS clásicos -->
      <div class="theme-selector">
        <label>
          <input type="radio" name="theme" value="claro" v-model="theme" @change="changeTheme" />
          Claro
        </label>
        <label>
          <input type="radio" name="theme" value="oscuro" v-model="theme" @change="changeTheme" />
          Oscuro
        </label>
      </div>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <component :is="Component" :theme="theme" />
      </router-view>
    </main>

    <footer class="footer">
      <p>© 2025 Sergio Bascón. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('claro') // Tema por defecto: claro

// Cambiar tema y guardar en LocalStorage
function changeTheme() {
  localStorage.setItem('theme', theme.value)
  applyTheme()
}

// Aplicar el tema al body y a todos los elementos excepto botones
function applyTheme() {
  const color = theme.value === 'oscuro' ? 'white' : 'black'
  const bg = theme.value === 'oscuro' ? '#1f1f1f' : 'white'

  // Fondo del body
  document.body.style.backgroundColor = bg
  document.body.style.backgroundImage = 'none'

  // Cambiar color de todos los elementos excepto botones
  document.querySelectorAll('body *:not(button)').forEach(el => {
    el.style.color = color
  })
}

// Recuperar la preferencia al iniciar
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'oscuro' || savedTheme === 'claro') {
    theme.value = savedTheme
  } else {
    theme.value = 'claro' // Por defecto, tema claro si no hay preferencia
  }
  applyTheme()
})
</script>
