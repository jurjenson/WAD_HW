<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: { AppHeader, AppFooter }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>