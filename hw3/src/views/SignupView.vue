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

      <div v-if="errors.length" class="errors">
        <p>The password is not valid -</p>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>

      <p v-if="success" class="success">Signup successful!</p>

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
      errors: [],
      success: false,
    };
  },
  methods: {
    validatePassword(p) {
      const errors = [];
      if (p.length < 8 || p.length >= 15)
        errors.push("Should be at least 8 characters and less than 15 characters");
      if (!/[A-Z]/.test(p))
        errors.push("Includes at least one uppercase alphabet character");
      if ((p.match(/[a-z]/g) || []).length < 2)
        errors.push("Includes at least two lowercase alphabet characters");
      if (!/[0-9]/.test(p))
        errors.push("Includes at least one numeric value");
      if (!/^[A-Z]/.test(p))
        errors.push("Should start with an uppercase letter");
      if (!p.includes("_"))
        errors.push('Should include the character "_"');
      return errors;
    },
    signup() {
       this.errors = this.validatePassword(this.password);
       this.success = this.errors.length === 0;
    },
  },
};
</script>
<style scoped>
.signup {
  display: flex;
  justify-content: center;
  padding: 30px 16px;
}

.signup-form {
  width: 100%;
  max-width: 380px;
  background: #eef3e2;
  padding: 20px 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.row label {
  width: 75px;
  text-align: right;
}

.row input {
  flex: 1;
  padding: 7px 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.errors {
  color: #c0392b;
  font-size: 14px;
}

.errors p {
  margin: 0;
}

.errors ul {
  margin: 4px 0 0;
  padding-left: 20px;
}

.success {
  color: green;
  margin: 0;
}

button {
  align-self: center;
  padding: 6px 22px;
  border: none;
  border-radius: 15px;
  background: #8fb0e0;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #6f95d0;
}
</style>
