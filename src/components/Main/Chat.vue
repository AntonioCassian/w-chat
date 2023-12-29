<template>
  <v-app>
    <v-container fluid fill-height class="pa-0">
      <v-row class="fill-height">
        <v-col cols="12" class="pt-0">
          <v-list class="list">
            <v-list-item>
              <v-card>
                <v-sheet class="d-flex flex-row align-end justify-end mb-4" v-if="chat.message">
                  <v-card class="pa-3" max-width="350px" color="primary" dark>
                    <p class="mb-0">
                      {{chat.message}}
                    </p>
                  </v-card>
                </v-sheet>
                <v-sheet class="d-flex flex-row align-end justify-end mb-4">
                  <v-card class="pa-3" max-width="350px" color="primary" dark>
                    <p class="mb-0">
                      message
                    </p>
                  </v-card>
                </v-sheet>


                <v-sheet class="d-flex flex-row mb-4">
                  <v-card class="pa-3" max-width="350px" color="grey darken-3" dark>
                    <p class="mb-0">
                      Texte ssssssssssss f sdfsdfdsfg sfdsdddddddddddddda ccccccc
                    </p>
                  </v-card>
                </v-sheet>
              </v-card>
            </v-list-item>
          </v-list>


        </v-col>
        <v-app-bar style="top:auto; bottom: 0px;">
          <v-form style="width: 100%;">
            <v-text-field
             v-model="chat.message"
             :append-icon="'mdi-navigation'"
               label="Message"
               type="text"
              @click:append="sendMessage"
              @click:clear="clearMessage">
            </v-text-field>
          </v-form>
        </v-app-bar>

      </v-row>
    </v-container>

  </v-app>
</template>

<script>
export default {
  name: 'Chat',
  props: ['id'],
  data: () => {
    return {
      chat: {
        message: ''
      },
    }
  },
  methods: {
    send() {
      this.$http.post(`/chat/6`, this.chat)
        // eslint-disable-next-line no-unused-vars
        .then(resp => { this.chat.message = '' })

    }
  }
}
</script>

<style>
.list {
  overflow-y: scroll;
  height: 95%;
  position: absolute;
  top: 0;
  width: 100%;
}

.absolute {
  top: auto;
  bottom: 0;
}
.v-input--horizontal .v-input__append {
    margin-inline-start: 15px;
    margin-inline-end: 15px;
}
.v-text-field .v-input__details {
  display: none;
}

</style>
