import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  getters: {
    allPosts: state => state.posts,
    getPostById: state => id => state.posts.find(post => post.id === id)
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async fetchPosts({ commit, state }) {
      if (state.posts.length > 0) return   // dont fetch again if posts are already there
      try {
        const response = await fetch('/posts.json')
        if (!response.ok) throw new Error('HTTP error ' + response.status)
        const posts = await response.json()
        commit('setPosts', posts)
      } catch (error) {
        console.error('Could not load posts:', error)
      }
    }
  }
})