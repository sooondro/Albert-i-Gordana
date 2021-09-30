<template>
  <v-row>
    <v-col
      v-for="(transportation, index) in transportations"
      :key="(transportation, index)"
      cols="3"
    >
      <v-card :href="transportation.link">
        <v-img :src="transportation.image" contain></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import transportations from '../data/transportations'

export default {
  computed: {
    transportations () {
      return transportations
    }
  }
}
</script>
