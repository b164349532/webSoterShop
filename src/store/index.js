import { createStore } from 'vuex'

export default createStore({
  state: {
    // Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
    currentAddress: 1
  },
  mutations: {
    // changeLogin (state, user) {
    //   state.Authorization = user.Authorization
    //   localStorage.setItem('Authorization', user.Authorization)
    // }
    setCurrentAddress (state, id) {
      state.currentAddress = id
    }
  },
  actions: {
  },
  modules: {
  }
})
