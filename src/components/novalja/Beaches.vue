<template>
  <div>
    <v-container>
      <h1 class="text-center" style="color:white">{{ $t('beaches') }}</h1>
      <v-row>
        <v-col v-for="(beach, index) in beaches" :key="(beach, index)" :sm="6">
          <v-card :href="beach.link">
            <v-img
              :src="beach.image"
              height="200px"
            ></v-img>

            <v-card-title> {{ beach.title}}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import beaches from '../../data/novalja/beaches'

export default {
  computed: {
    beaches () {
      return beaches
    }
  },
  i18n: {
    messages: {
      hr: {
        beaches: 'Plaže'
      },
      en: {
        beaches: 'Beaches'
      },
      de: {
        beaches: 'Strände'
      },
      it: {
        beaches: 'Spiagge'
      },
      sl: {
        beaches: 'Plaže'
      },
      cs: {
        beaches: 'Pláže'
      }
    }
  }
}
</script>
