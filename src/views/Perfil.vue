<template>
  <Header />
  <v-container>
    <v-row no-gutters class="d-flex justify-center" v-for="ust in user" :key="ust.id">
      <v-card class="text-center d-flex flex-column justify-center align-center" dot offset-x="11" offset-y="13" width="400">

        <v-avatar class="text-center mt-8 mb-3" size="220" label="forim">

          <v-img crossorigin="anonymous" v-if="ust.Photos[0].url" :src="ust.Photos[0].url" />
          <v-icon v-if="!ust.Photos[0]" style="font-size: 42px;" icon="mdi-account-circle-outline"></v-icon>
        </v-avatar>
          <v-form class="wid" @submit.prevent="upLoad">
            <v-file-input  multiple label="File input" class="wid2" @change="handleFile" type="file"/>
            <v-btn type="submit" class="mt-3" variant="text" elevation="2" color="primary">Send</v-btn>
          </v-form>

        <v-card-title class="layout justify-center">{{ ust.username }}</v-card-title>
        <v-card-title class="layout justify-center">{{ ust.email }}</v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Header from '@/components/Header/Header.vue';
export default {
  name: 'Perfil',
  props: { user: Object },
  components: { Header },
  methods: {
  },
  setup() {
    const user = ref([]);
    const selected = ref([])

    const getUSer = async () => {
      try {
        const response = await axios.get('/tokens')
        user.value = response.data;
        console.log(response.data)

      } catch (err) {
        console.log(err)
      }
    }

    const handleFile = (event) => {
      console.log(event)
      selected.value = event.target.files[0];
    }

    const upLoad = async() => {
      try {

        await axios.post('/photo', selected.value)
      } catch(err) {
        console.log(err)
      }
    }

    onMounted(() => {
      getUSer()
    })

    return {
      user,
      upLoad,
      handleFile
    }
  }
}
</script>

<style>
.wid {
  width: 50%;
}

.wid2 .v-input__details {
  display: none;
}
</style>
