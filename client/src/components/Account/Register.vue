<template>
    <div>
      <h1>Register</h1>
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="email" />
        <br/>
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password" />
      <br/>
      <div class="error" v-html="error" />
      <br/>
        <button
        @click="register"> Regsiter </button>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  name: 'Register',
  data () {
    return {
        email: '',
        password: '',
        error: ''
    }
  },
  methods: {
    async register () {
      try {
          await AuthService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red
}

</style>
