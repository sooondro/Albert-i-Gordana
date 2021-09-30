import mainAxios from 'axios'

const state = {
  apartments: []
}

const mutations = {
  'SET_APARTMENTS' (state, apartments) {
    state.apartments = apartments
  }
}

const actions = {
  initApartments ({ commit, state }) {
    mainAxios.get('/apartments.json')
      .then(response => {
        const data = response.data
        const apartments = []
        for (const key in data) {
          const apartment = data[key]
          apartment.id = key
          apartments.push(apartment)
        }
        console.log('ini app')
        console.log(apartments)
        commit('SET_APARTMENTS', apartments)
      })
      .catch(err => console.log(err))
  }
}

const getters = {
  apartments (state) {
    return state.apartments
  },
  apartment: (state, id) => {
    const apartment = state.apartments.find(apartment => apartment.id === id)
    console.log('ima li')
    console.log(apartment)
    console.log(id)
    return apartment
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
