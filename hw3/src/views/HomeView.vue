<template>
  <main class="home">
    <PostItem v-for="post in posts" :key="post.id" :id="post.id" />
  </main>
</template>

<script>
import PostItem from '../components/PostItem.vue'

export default {
  name: 'HomeView',
  components: { PostItem },
  computed: {
    posts() {
      return this.$store.getters.allPosts
    }
  },
  mounted() {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
}
</style>