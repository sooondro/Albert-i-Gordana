<template>
  <div class="about" style="color: white">
    <AddApartmentFrom v-if="admin" class="mb-10" />
    <apartment
      v-for="(apartment, index) in apartments"
      :key="(apartment, index)"
      class="mb-7"
      :apartment="apartment"
    ></apartment>
  </div>
</template>

<script>
import Apartment from '../components/Apartment.vue'
import AddApartmentFrom from '../components/AddApartmentForm.vue'

export default {
  computed: {
    apartments () {
      return this.$store.getters.apartments
    },
    admin () {
      const res = this.$store.getters.user(localStorage.getItem('email')).admin
      return res
    }
  },
  components: {
    Apartment,
    AddApartmentFrom
  }
}
</script>
