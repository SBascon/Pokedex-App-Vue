# Pokémon Battle App (Pokédex en Vue)

Una aplicación web desarrollada en **Vue 3** que actúa como **Pokédex interactiva**.  
Permite visualizar información básica de Pokémon, filtrar por nombre y ver detalles de cada Pokémon.  

> ⚠️ Esta versión se centra únicamente en la **Pokédex**, sin la funcionalidad de combate.

---

## 📌 Características

- Muestra **10 Pokémon aleatorios** al cargar la página.  
- Cada Pokémon se representa en una **tarjeta interactiva** con:
  - Nombre  
  - Imagen  
  - Valor de Ataque  
  - Valor de Defensa  
- **Vista de detalle** para cada Pokémon:
  - Muestra información completa incluyendo HP y Velocidad.  
- **Filtro en tiempo real** por nombre de Pokémon.  
- **Tema claro/oscuro** configurable desde la barra de navegación, con persistencia en LocalStorage.  
- **Responsive**: las tarjetas y la interfaz se adaptan a móviles, tablets y pantallas grandes.  

---

## 🚀 Tecnologías utilizadas

- [Vue 3](https://vuejs.org/) – Framework principal  
- [Vue Router](https://router.vuejs.org/) – Navegación entre vistas  
- CSS personalizado para estilo y efectos visuales  
- PokeAPI ([https://pokeapi.co/](https://pokeapi.co/)) – API de datos de Pokémon  

---

## ⚡ Instalación y ejecución

1. Clonar el repositorio:  
```bash
git clone <url-del-repo>



```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
