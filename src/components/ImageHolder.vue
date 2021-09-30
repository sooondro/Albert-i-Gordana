<template>
  <div>
    <v-img :src="src" height="600px" class="mb-5" contain></v-img>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      src: null
    }
  },
  props: ['apartmentId'],
  created () {
    firebase.storage().ref(this.apartmentId).getDownloadURL().then(url => {
      this.src = url
    })
  }
}

</script>
