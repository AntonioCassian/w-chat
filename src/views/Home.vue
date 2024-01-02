<template>
  <Header />
  <v-row class="mt-0">
    <v-col cols="3" class="pa-0 br">
      <Lista @user="handleUser"/>
    </v-col>
    <v-col cols="8" class="pa-0 height">
      <Chat :chat="userId" />
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
    const userId = ref(null);
    const selectUser= ref(null);
    const handleUser = (user) => {
      userId.value = user;
    }
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
      handleUser,
      selectUser,
      userId
    }
  }

}
</script>

<style>
.dif {
  height: 100vh;
}
.br{
  border-right: 1px solid #cecece;
}

.height .v-application {
  height: 100%;
}
</style>
