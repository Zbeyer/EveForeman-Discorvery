<template>
    <div class="blue darken-2 text-center">
      <v-layout class="d-flex pa-2">
        <v-flex xs6 offset-xs3>
          <div class="white elevation-2">
            <v-toolbar flat dense dark>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <div class="pa-2 ma-2 blue darken-2 text-center">
              <v-text-field
                type="email"
                name="email"
                v-model="email"
                placeholder="email" />
                <br/>
              <v-text-field
                type="password"
                name="password"
                v-model="password"
                placeholder="password" />
              <br/>
              <div class="error" v-html="error" />
              <br/>
                <v-btn
                @click="login"> Login </v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  name: 'Login',
  data () {
    return {
        email: '',
        password: '',
        error: ''
    }
  },
  methods: {
    async login () {
      this.error = ''

      try {
          const user = await AuthService.login({
          email: this.email,
          password: this.password
        })
        console.log('%o', user)
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
