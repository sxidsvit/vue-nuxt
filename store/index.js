export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state, token) {
    state.token = null
  },

}

export const actions = {
  login({ commit }) {
    commit('setToken', 'truetoken')
  },
  logout({ commit }) {
    commit('clearToken')
  },
  nuxtServerInit({ dispatch }) {
    console.log('nuxtServerInit')
  },
}

export const getters = {
  hasToken: state => !!state.token
}
