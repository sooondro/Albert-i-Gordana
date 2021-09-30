<template>
  <v-app>
    <Header></Header>

    <v-main class="mb-5 mt-5">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },
  created () {
    this.$store.dispatch('attemptAutoLogin')
    this.$store.dispatch('fetchUsers')
    this.$store.dispatch('initApartments')
    this.$store.dispatch('initReservations')
  }
}
</script>

<style>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
