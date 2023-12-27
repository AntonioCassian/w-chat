<template>
  <v-toolbar class="border-b">
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Chat</span>
      <span class="font-weight-light">Messeger</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text id="slot">
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>
      <v-menu activator="#slot" offset-y>
        <v-list>
          <v-list-item>
            <router-link to="/perfil" style="text-decoration: none; color: black;">
              Perfil
            </router-link>
          </v-list-item>
          <v-list-item @click.prevent="logout">
              Sair
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'Header',
  setup() {
    const route = useRouter();
    const logout = async () => {
      localStorage.removeItem('token')
      route.push({ path: '/login' })
    }
    return {
      logout,
    }
  }
}
</script>
