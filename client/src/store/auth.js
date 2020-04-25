import firebase from '@/firebase';

const mutations = {
  setUser(state, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  },
};

const state = {
  user: {},
  isLoggedIn: false,
};

const actions = {
  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // eslint-disable-next-line no-unused-vars
    await firebase.auth().signInWithPopup(provider);
  },
  async loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    // eslint-disable-next-line no-unused-vars
    await firebase.auth().signInWithPopup(provider);
  },
  async signOut() {
    await firebase.auth().signOut();
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
