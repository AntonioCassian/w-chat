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
export default {
  name: 'Home',
  components: { Header, Lista, Chat },


}
</script>

<style>
.dif {
  height: 100vh;
}


</style>
