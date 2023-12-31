<template>
  <v-app>
    <v-container fluid fill-height class="pa-0">
      <v-row v-if="user" class="fill-height height">
        <v-col cols="12" class="pt-0 ma-2">
          <v-list class="list">
            <v-list-item>
              <v-card>
                <v-sheet class="d-flex flex-row align-end justify-end mb-4">
                  <v-card class="pa-3" max-width="350px" color="primary" dark>
                    <p class="mb-0">
                      mg.msgUser
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
            <v-text-field v-model="message.msg" :append-icon="'mdi-navigation'" label="Message" type="text"
              @click:append="send" @click:clear="clearMessage">
            </v-text-field>
          </v-form>
        </v-app-bar>

      </v-row>

      <v-row v-if="!user" justify="center" class="fill-height height">
        <v-col cols="12" class="pt-0 ma-2">
          <v-sheet width="800" height="400" class="d-flex justify-center align-center flex-column">
            <v-icon color="#ececec" icon="mdi-information" size="120px"></v-icon>
            <div class="text-h2 font-weight-bold" style="color: #ececec;">Select User!</div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {
  name: 'Chat',
  setup(props) {
    const user = props.variant
    console.log(user)
    const msg = ref([])
    const message = ref({
      msg: ''
    })
    const send = async () => {
      await axios.post(`/chat/`, message.value)
    }
    const getmsg = async () => {
      try {
        const response = await axios.get(`/chat/${id}`)
        msg.value = response.data;
      } catch (err) {
        console.log(err)
      }
    }

    onMounted(() => {
      getmsg()
    })

    return {
      message,
      send,
      msg,
      getmsg,
      user
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
