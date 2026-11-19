<template>
  <article v-if="post" class="post">
    <div class="post-header">
      <img :src="post.authorImage" :alt="post.author" class="profile-pic">
      <span class="date">{{ formattedDate }}</span>
    </div>

    <img v-if="post.postImage" :src="post.postImage" alt="Post image" class="post-image">

    <p>{{ post.text }}</p>

    <div class="post-reactions">
        <button @click="like">👍 Like</button>
        <span class="likes">{{ post.likes }} likes</span>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    id: { type: Number, required: true }
  },
  computed: {
    // get post from store by id
    post() {
      return this.$store.getters.getPostById(this.id)
    },

    formattedDate() {
      return new Date(this.post.createTime).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
      })
    }
  },
  methods: {
    like() {
        this.$store.commit('incrementLikes', this.id)
    }
  }
}
</script>

<style scoped>
.post {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.date {
  font-size: 0.9rem;
  color: #666;
}

.post-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
}

p {
  line-height: 1.5;
}

.post-reactions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.post-reactions button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #d8e4ff;
  cursor: pointer;
}

.post-reactions button:hover {
  background-color: #c2d4ff;
}

.likes {
  color: #555;
}
</style>