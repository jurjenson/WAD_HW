<template>
  <div class="home">
    <div class="side"></div>

    <div class="posts">
      <PostItem v-for="post in posts" :key="post.id" :id="post.id" />
      <button class="reset-btn" @click="resetLikes">Reset likes</button>
    </div>

    <div class="side"></div>
  </div>
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
  methods: {
    resetLikes() {
      this.$store.commit('resetLikes')
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
  gap: 20px;
  padding: 20px;
}

.side {
  flex: 1;
  background-color: #ddd;
  border-radius: 8px;
}

.posts {
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.reset-btn {
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #7aa7e0;
  color: white;
  cursor: pointer;
}
</style>