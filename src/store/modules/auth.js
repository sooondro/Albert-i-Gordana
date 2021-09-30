import axios from '../../axios-auth'
import mainAxios from 'axios'
import router from '../../router/index'

const state = {
  idToken: null,
  userId: null,
  users: []
}

const mutations = {
  authUser (state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  },
  storeUsers (state, users) {
    state.users = users
  },
  clearData (state) {
    state.idToken = null
    state.userId = null
  }
}

const actions = {
  setLogoutTimer ({ commit }, expirationTime) {
    setTimeout(() => {
      commit('clearData')
    }, expirationTime * 1000)
  },
  signup ({ commit, dispatch }, authData) {
    axios.post(':signUp?key=AIzaSyButHZS77MTbbUQM7M0eM0NYB7l7KxibfI', {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => {
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem('email', authData.email)
        dispatch('storeUser', authData)
        dispatch('setLogoutTimer', res.data.expiresIn)
        router.replace('/')
      })
      .catch()
  },
  storeUser ({ commit, state }, userData) {
    if (!state.idToken) {
      return
    }
    mainAxios.post('/users.json' + '?auth=' + state.idToken, userData)
      .then()
      .catch()
  },
  login ({ commit, dispatch }, authData) {
    axios.post(':signInWithPassword?key=AIzaSyButHZS77MTbbUQM7M0eM0NYB7l7KxibfI', {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => {
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('email', authData.email)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expirationDate', expirationDate)
        dispatch('setLogoutTimer', res.data.expiresIn)
        router.replace('/')
      })
      .catch()
  },
  attemptAutoLogin ({ commit }) {
    const token = localStorage.getItem('token')
    if (!token) return
    const expirationDate = localStorage.getItem('expirationDate')
    const now = new Date()
    if (now >= expirationDate) {
      return
    }
    const userId = localStorage.getItem('userId')
    commit('authUser', {
      token: token,
      userId: userId
    })
  },
  logout ({ commit }) {
    commit('clearData')
    router.replace('/login')
    localStorage.clear()
  },
  fetchUsers ({ commit, state }) {
    mainAxios.get('/users.json')
      .then((res) => {
        const data = res.data
        const users = []
        for (const key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        commit('storeUsers', users)
      })
      .catch()
  }
}

const getters = {
  user: (state, getters) => (email) => {
    if (!getters.isAuthenticated) return {}
    const user = state.users.find(user => user.email === email)
    if (!user) {
      return {}
    }
    return user
  },
  userId (state) {
    return state.userId
  },
  isAuthenticated (state) {
    return state.idToken !== null
  },
  idToken (state) {
    return state.idToken
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
