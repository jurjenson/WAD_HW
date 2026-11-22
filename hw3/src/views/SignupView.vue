<template>
  <div class="signup">
    <form class="signup-form" @submit.prevent="signup">
      <div class="row">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" placeholder="Email" required />
      </div>

      <div class="row">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" placeholder="Password" />
      </div>

      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {},
  },
};
</script>
