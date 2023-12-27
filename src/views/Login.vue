<template>
  <v-row class="fill-height" xs12 md6 lg4>
    <v-col cols="6" class="" style="background: red">

    </v-col>

    <v-col cols="6" class="d-flex flex-column justify-center align-center text-center">
      <v-sheet width="50%">
        <Title title="Login" />
        <v-form @submit.prevent="logIn">
          <v-text-field type="text" label="Username" v-model="user.username"></v-text-field>
          <v-text-field type="password" label="Password" v-model="user.password"></v-text-field>
          <v-btn color="primary" type="submit">Login</v-btn>
        </v-form>
      </v-sheet>
      <v-btn text to="/register" class="text-lowercase plain mt-6">Click-me here and Resgister!</v-btn>

    </v-col>
  </v-row>
</template>

<script>
import Title from '@/components/Titles/Title.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'Login',
  components: { Title },
  setup() {
    const route = useRouter();
    const user = ref({
      username: '',
      password: ''
    });
    const logIn = async () => {
      try {
        const response = await axios.post('/tokens', user.value)
        localStorage.setItem('token', response.data.token)
        route.push({ path: '/' })
      } catch (err) {
        console.log('Erro na requisição de login:', err);
      }
    };

    return {
      user,
      logIn
    }
  }
}
</script>
