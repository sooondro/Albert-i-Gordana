<template>
  <v-card class="mx-auto" max-width="600">
    <v-img :src="src" height="400px" contain></v-img>

    <v-card-title>{{ t(apartment.title) }}</v-card-title>

    <v-card-subtitle>{{ t(apartment.type) }}</v-card-subtitle>

    <v-card-actions>
      <v-btn color="info" text :to="{ name: 'apartment', params: { id: this.apartment.id } }">{{ $t('reservation')}}</v-btn>
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-list disabled dense>
          <v-list-item v-for="(item, index) in t(apartment.info)" :key="(item, index)">
            <v-spacer />
            <v-list-item-icon>
              <v-icon>mdi-information-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import firebase from 'firebase'
import dynamicLocalization from '../mixins/dynamicLocalization'

export default {
  data () {
    return {
      show: false,
      src: null
    }
  },
  created () {
    firebase.storage().ref(this.apartment.id).getDownloadURL().then(url => {
      this.src = url
    })
  },
  props: ['apartment'],
  mixins: [dynamicLocalization],
  i18n: {
    messages: {
      hr: {
        reservation: 'Napravite rezervaciju'
      },
      en: {
        reservation: 'Make a reservation'
      },
      de: {
        reservation: 'Eine Reservierung machen'
      },
      it: {
        reservation: 'Fare una prenotazione'
      },
      sl: {
        reservation: 'Rezervirati'
      },
      cs: {
        reservation: 'Rezervovat'
      }
    }
  }
}
</script>
