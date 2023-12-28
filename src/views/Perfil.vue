<template>
  <v-container>
    <v-row no-gutters class="d-flex justify-center" v-for="ust in user" :key="ust.id">
      <v-card class="text-center" dot offset-x="11" offset-y="13" width="400">
        <v-bagde>
          <v-avatar class="text-center mt-8 mb-3" size="220">
            
            <img crossorigin="anonymous"
              :src="ust.Photos[0].url">
          </v-avatar>
        </v-bagde>
        <v-card-title class="layout justify-center">{{ ust.username }}</v-card-title>
        <v-card-title class="layout justify-center">{{ ust.email }}</v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
export default {
  name: 'Perfil',
  props: { user: Object },
  // https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg
  setup() {
    const user = ref([]);
    const getUSer = async () => {
      try {
        const response = await axios.get('/tokens')
        user.value = response.data;
        console.log(response.data)

      } catch (err) {
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
