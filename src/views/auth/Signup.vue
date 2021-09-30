<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1 class="display-1">{{ $t('signup')}}</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            :label="this.$t('email')"
            prepend-icon="mdi-account-circle"
            v-model="email"
            :rules="emailRules"
            required
          />
          <v-text-field
            :label="this.$t('password')"
            required
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <v-text-field
            :label="this.$t('confirmPassword')"
            required
            :rules="confirmPasswordRules"
            :type="showConfirmPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            v-model="confirmPassword"
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showConfirmPassword = !showConfirmPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success" to="/login">{{ $t('login')}}</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="onSubmit" color="info" type="submit">{{ $t('signup')}}</v-btn>
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
      showConfirmPassword: false,
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    emailRules () {
      return [
        (v) => /.+@.+\..+/.test(v) || this.$t('emailValid'),
        v => !!v || this.$t('req')
      ]
    },
    passwordRules () {
      return [
        (v) => !!v || this.$t('req'),
        (v) => (v && v.length <= 6) || this.$t('less')
      ]
    },
    confirmPasswordRules () {
      return [
        v => !!v || this.$t('req'),
        (v) => v === this.password || this.$t('same')
      ]
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        admin: false
      }
      this.$store.dispatch('signup', formData)
    }
  },
  i18n: {
    messages
  }
}
</script>
