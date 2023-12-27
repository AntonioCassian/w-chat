<template>
  <Header />
  <v-row class="mt-0">
    <v-col cols="2" class="pa-0">
      teste
      <div>oi</div>
      <div>oi</div>
      <div>oi</div>
      <div>oi</div>
      <div>oi</div>
      <div>oi</div>
      <div>oi</div>
      <div>oi</div>
      <div>oi</div>
      <div>oi</div>
      <div>oi</div>
      <Lista />
    </v-col>
    <v-col cols="7" class="pa-0">
      <ul>
        <li v-for="ust in user" :key="ust.id">
          {{ ust.username }}
        </li>
      </ul>
      <Chat />
    </v-col>
    <v-col cols="3" class="pa-0">
      <v-list class="pa-0">
        <v-card>
          <v-card-title>Contatos</v-card-title>
        </v-card>
        <Lista />
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Lista from '@/components/Listas/Lista.vue';
import Chat from '@/components/Main/Chat.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
export default {
  name: 'Home',
  components: { Header, Lista, Chat },
  setup() {
    const user = ref([]);
    const getUSer = async () => {
      try{
        const response = await axios.get('/tokens')
        user.value = response.data;
        console.log(response.data)

      } catch(err) {
        console.log(err)
      }

    }

    onMounted(() => {
      getUSer()
    })

    return {
      user,
    }
  }

}
</script>

<style>
.dif {
  height: 100vh;
}
</style>
