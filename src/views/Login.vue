<template>
  <v-row class="fill-height" xs12 md6 lg4>
    <v-col cols="6" class="" style="background: red">

    </v-col>

    <v-col cols="6" class="d-flex flex-column justify-center align-center text-center">
      <v-sheet width="50%">
        <Title title="Login" />
        <v-form @submit.prevent="submit">
          <v-text-field type="text" label="Username" v-model="form.username"></v-text-field>
          <v-text-field type="password" label="Password" v-model="form.password"></v-text-field>
          <v-btn color="primary" type="submit">Login</v-btn>
        </v-form>
      </v-sheet>
      <v-btn text to="/register" class="text-lowercase plain mt-6">Click-me here and Resgister!</v-btn>

    </v-col>
  </v-row>
</template>

<script>
import Title from '@/components/Titles/Title.vue';
export default {
  name: 'Login',
  components: { Title },
  data: () => {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    submit() {
      const newUser = {
        username: this.form.username,
        password: this.form.password
      }
      this.$store.dispatch('logIn', newUser)
      this.$router.push({path: '/'})
    }
  }
}
</script>
