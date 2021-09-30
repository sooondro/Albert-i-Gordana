import mainAxios from 'axios'

const state = {
  reservations: []
}

const mutations = {
  'SET_RESERVATIONS' (state, reservations) {
    state.reservations = reservations
  },
  'STORE_RESERVATION' (state, reservation) {
    state.reservations.push(reservation)
  }
}

const actions = {
  initReservations ({ commit, state }) {
    mainAxios.get('/reservations.json')
      .then(response => {
        const data = response.data
        const reservations = []
        for (const key in data) {
          const reservation = data[key]
          reservation.id = key
          reservations.push(reservation)
        }
        commit('SET_RESERVATIONS', reservations)
      })
      .catch(err => console.log(err))
  },
  storeReservation ({ commit, dispatch }, reservationData) {
    commit('STORE_RESERVATION', reservationData)
  }
}

const getters = {
  apartmentReservations: (state) => (id) => {
    var apartmentReservations = []
    apartmentReservations = state.reservations.filter(reservation => reservation.apartmentId === id)
    return apartmentReservations
  },
  reservations (state) {
    return state.reservations
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
