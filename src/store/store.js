import { createStore } from 'vuex'
import axios from 'axios';
import api from '@/plugins/axios';


const auth = token => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const setLocalToken = token => {
  localStorage.setItem('token', token)
}
const deleteToken = () => {
  localStorage.removeItem('token')
}

const getLocalToken = () => {
  return localStorage.getItem('token')
}

const store = createStore({
  namespace: true,
  state: {
    user: {},
    token: ''
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  getters: {
    Authorization: state => !!state.token
  },
  actions: {


    async Register(data) {
      await api.post('/user', data)
    },
    async logIn({ dispatch }, data) {
      await api.post('/tokens', data).then(response => {
        dispatch('ActionSetUser', response.data.user)
        dispatch('ActionSetToken', response.data.token)
      })
      .catch(error => {
          console.error('Erro na requisição de login:', response.data.errors);
        });
    },
    ActionSetUser({ commit }, payload) {
      commit('SET_USER', payload)
    },
    ActionSetToken({ commit }, payload) {
      auth(payload)
      setLocalToken(payload)
      commit('SET_TOKEN', payload)
    },
    ActionLogout({ dispatch }) {
      auth('')
      deleteToken()
      dispatch('ActionSetUser', {})
      dispatch('ActionSetToken', '')
    },

    ActionCheckToken({ dispatch, state }) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        return Promise.resolve(state.token)
      }

      const token = getLocalToken();

      if (!token) {
        return Promise.reject(new Error('Token Invalid'))
      }

      dispatch('ActionSetToken', token)
      return dispatch('ActionSession')
    },
    ActionSession({ dispatch }) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data: { user } } = await api.get('/tokens')
          const token = getLocalToken();

          if (token) {
            auth(token)
            this.store.commit('SET_TOKEN', token);
            this.store.dispatch('ActionSession')
          }

          dispatch('ActionSetUser', user)
          resolve()
        } catch (err) {
          dispatch('ActionLogout')
          reject(err)
        }
      })
    }
  }
})

export default store;
