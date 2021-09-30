<template>
  <v-container>
    <v-row class="mb-10 text-center" style="color:white">
      <v-col v-for="(house, index) in $t('houses')" :key="(house, index)">
        <h2>{{ titles[index] }}</h2>
        <iframe
          :src="iframes[index]"
          frameborder="0"
          style="border: 0; width: 100%; height: 25rem"
          allowfullscreen=""
        ></iframe>
      </v-col>
    </v-row>
    <transportations class="mb-10"></transportations>

    <v-img src='../assets/pictures/findUs/novalja_map.jpg'></v-img>
  </v-container>
</template>

<script>
import Transportations from '../components/Transportations.vue'
import messages from '../data/houses'
import iframes from '../data/iframes'

export default {
  data () {
    return {
      iframes,
      titles: [
        'Albert',
        'Gordana'
      ]
    }
  },
  components: {
    Transportations
  },
  i18n: {
    messages
  }
}
</script>
