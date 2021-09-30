<template>
  <div>
    <v-container>
      <h1 class="text-center" style="color:white">{{ $t('fieldTrips') }}</h1>
      <v-row>
        <v-col v-for="(fieldTrip, index) in fieldTrips" :key="(fieldTrip, index)" :sm="6">
          <v-card :href="fieldTrip.link">
            <v-img
              :src="fieldTrip.image"
              height="200px"
            ></v-img>

            <v-card-title> {{ fieldTrip.title}}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import fieldTrips from '../../data/novalja/fieldTrips'

export default {
  computed: {
    fieldTrips () {
      return fieldTrips
    }
  },
  i18n: {
    messages: {
      hr: {
        fieldTrips: 'Izleti'
      },
      en: {
        fieldTrips: 'Excursions'
      },
      de: {
        fieldTrips: 'Ausflüge'
      },
      it: {
        fieldTrips: 'Escursioni'
      },
      sl: {
        fieldTrips: 'Plaže'
      },
      cs: {
        fieldTrips: 'Výlety'
      }
    }
  }
}
</script>
