# Pokédex Pokémon (en Vue)

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

### Instalar dependencias:

```sh
npm install
```

### Ejecutar el servidor de desarrollo:

```sh
npm run dev
```

## 🎨 Uso del tema claro/oscuro

En la barra de navegación, selecciona Claro u Oscuro.

La aplicación aplicará los colores correspondientes automáticamente.

La preferencia se guarda en LocalStorage, por lo que se mantiene al recargar la página.
