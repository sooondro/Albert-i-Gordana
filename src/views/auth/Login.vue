<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1 class="display-1">{{ $t('login')}}</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" :label="$t('email')">
          <v-text-field :rules="required" :label="this.$t('email')" prepend-icon="mdi-email" v-model="email" required/>
          <v-text-field
            :label="$t('password')"
            required
            :rules="required"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success" to="/signup">{{ $t('signup') }}</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="onSubmit" :disabled="!valid">{{ $t('login') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import messages from '../../data/authRules'

export default {
  data () {
    return {
      valid: true,
      showPassword: false,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', {
        email: formData.email,
        password: formData.password
      })
    }
  },
  computed: {
    required () {
      return [v => !!v || this.$t('req')]
    }
  },
  i18n: {
    messages
  }
}
</script>
