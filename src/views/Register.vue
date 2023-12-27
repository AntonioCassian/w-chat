<template>
  <v-row class="fill-height" xs12 md6 lg4>
    <v-col cols="6" class="d-flex flex-column justify-center align-center text-center">
      <v-sheet width="50%">
        <Title title="Register" />
        <v-form @submit.prevent="registrar">
          <v-text-field type="text" label="Username" :rules="usernameR" v-model="user.username"></v-text-field>
          <v-text-field type="email" label="E-mail" :rules="emailR" v-model="user.email"></v-text-field>
          <v-text-field type="password" label="Password" :rules="passwordR" v-model="user.password"></v-text-field>
          <v-btn type="submit" color="primary">Register</v-btn>
          <v-alert type="error" v-if="errors.length > 0">
            <ul>
              <li v-for="erro in errors" :key="erro">{{ erro }}</li>
            </ul>
          </v-alert>
        </v-form>
      </v-sheet>
      <v-btn text to="/login" class="text-lowercase plain mt-6">Click-me here and Login!</v-btn>
    </v-col>

    <v-col cols="6" class="" style="background: red">

    </v-col>
  </v-row>
</template>

<script>
import Title from '../components/Titles/Title.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Register',
  components: { Title },
  setup() {
    const route = useRouter();
    const user = ref({
      username: '',
      email: '',
      password: ''
    });
    let usernameR = [
      v => !!v || 'Username is required',
      v => v.length >= 3 || 'Username must be longer than 3 characters'
    ];
    let emailR = [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ];
    let passwordR = [
  v => !!v || 'Password is required',
  v => v.length === 7 || v.length === 8 || 'The password must be 7 or 8 characters long'
];
    let errors = []
    const registrar = async () => {
      try {
        await axios.post('/user', user.value).then(res =>
          user.value.username = '',
          user.value.email = '',
          user.value.password = '',
        )
        route.push({ path: '/login' })
      } catch (err) {
        console.error('Erro na requisição de login:', err);
      }
    };

    return {
      user,
      usernameR,
      emailR,
      passwordR,
      errors,
      registrar
    };

  }
};
</script>
