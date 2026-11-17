<template>
  <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/signup">Signup</router-link>
      </nav>
  </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover,
nav a.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>