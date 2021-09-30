<template>
  <div>
    <v-container>
      <image-holder :apartmentId="this.$route.params.id"></image-holder>
      <v-date-picker
        :allowed-dates="getAllowedDates"
        :disabled="!auth"
        :min="min"
        v-show="auth"
        v-model="reservationData.dates"
        range
        full-width
        :locale="$i18n.locale"
      ></v-date-picker>
      <p style="color: white" v-if="!auth">
        {{ $t('login')}}
      </p>
      <v-divider class="mb-4 mt-4"></v-divider>
      <v-btn
        :disabled="reservationData.dates.length < 2"
        color="success"
        class="mr-4"
        @click="saveReservation"
      >
        {{ $t('save') }}
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import ImageHolder from '../components/ImageHolder.vue'

export default {
  data: () => ({
    reservationData: {
      dates: [],
      src: null
    },
    reservedDates: null
  }),
  components: {
    ImageHolder
  },
  computed: {
    min () {
      const min = new Date()
      return min.toISOString()
    },
    dateRangeText () {
      return this.reservationData.dates.join(' ~ ')
    },
    auth () {
      return this.$store.getters.isAuthenticated
    }

  },
  methods: {
    getAllowedDates (val) {
      return !this.reservedDates.some((element) => {
        const from = new Date(element.dates[0]).getTime()
        const to = new Date(element.dates[1]).getTime()
        const check = new Date(val).getTime()
        return check >= from && check <= to
      })
    },
    saveReservation () {
      this.reservationData.apartmentId = this.$route.params.id
      this.reservationData.userEmail = localStorage.getItem('email')
      axios
        .post(
          '/reservations.json' + '?auth=' + this.$store.getters.idToken,
          this.reservationData
        )
        .then((res) => {
          this.reservationData.id = res.data.name
        })
        .catch((err) => console.log(err))

      this.$store.dispatch('storeReservation', this.reservationData)
      this.$router.replace('/')
    }
  },
  created () {
    this.reservedDates = this.$store.getters.apartmentReservations(
      this.$route.params.id
    )
  },
  i18n: {
    messages: {
      hr: {
        save: 'Spremi rezervaciju',
        login: 'Prijavite se za rezervaciju'
      },
      en: {
        save: 'Save reservation',
        login: 'Please login to make a reservation'
      },
      de: {
        save: 'Reservierung speichern',
        login: 'Bitte melden Sie sich an, um eine Reservierung vorzunehmen'
      },
      it: {
        save: 'Salva prenotazione',
        login: 'Effettua il login per effettuare una prenotazione'
      },
      sl: {
        save: 'Shrani rezervacijo',
        login: 'Za rezervacijo se prijavite'
      },
      cs: {
        save: 'Uložit rezervaci',
        login: 'Chcete-li provést rezervaci, přihlaste se'
      }
    }
  }
}

</script>
