<template>
  <div>
    <v-container class="mb-10">
      <v-row>
        <v-col class="md">
          <novalja style="color:white"></novalja>
        </v-col>
        <v-col>
          <pag style="color:white"></pag>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <beaches></beaches>
    </v-container>
        <v-container>
      <food></food>
    </v-container>
            <v-container>
      <field-trips></field-trips>
    </v-container>
  </div>
</template>

<script>
import Novalja from '../components/novalja/Novalja.vue'
import Pag from '../components/novalja/Pag.vue'
import Beaches from '../components/novalja/Beaches.vue'
import Food from '../components/novalja/Food.vue'
import FieldTrips from '../components/novalja/FieldTrips.vue'

export default {
  components: {
    Novalja,
    Pag,
    Beaches,
    Food,
    FieldTrips
  }
}
</script>
