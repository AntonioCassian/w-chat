<template>
  <v-list lines="one" class="pa-0">
    <v-list-item v-for="us in user"  :key="us.id" class="border-b pa-2 px-6" @click="$emit('user', us)">
      <v-sheet class="d-flex" @click="sendUser">
        <v-icon v-if="!us.Photos[0]" style="font-size: 42px;" icon="mdi-account-circle-outline"></v-icon>
        <v-avatar v-if="us.Photos[0]" :image="us.Photos[0].url"></v-avatar>
        <v-list-item-content class="ms-3">
          <v-list-item-title>{{ us.username }}</v-list-item-title>
          <v-list-item-subtitle>{{ us.id }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-sheet>
    </v-list-item>
  </v-list>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
export default {
  setup(props, {emit}) {
    const userId = props.variant;
    const user = ref([]);
    const getUSer = async () => {
      try {
        const response = await axios.get('/user')
        user.value = response.data;
        console.log(response.data)

      } catch (err) {
        console.log(err)
      }
    }

    const sendUser = () => {
      emit('user', userId)
    }

    onMounted(() => {
      getUSer()
    })

    return {
      user,
      sendUser
    }
  }
}
</script>


<style scoped>
.contact {
  background: aliceblue;
  border-bottom: 0.5px solid #f6f6f6;
  border-top: 0.8px solid #dbd3d3;
}

.sep> {
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
}
</style>
