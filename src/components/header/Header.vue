<template>
  <div>
    <v-app-bar dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-list-item-avatar>
        <img src="../../assets/logo.png" />
      </v-list-item-avatar>
      <v-toolbar-title>Albert i Gordana</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="black--text text--accent-4">
          <v-list-item
            v-for="(item, index) in $t('items')"
            :key="(item, index)"
            :to="routes[index]"
          >
            <v-list-item-icon>
              <v-icon>{{ icons[index] }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <language-picker></language-picker>
          </v-list-item>
          <v-list-item v-if="!auth" to="/login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('login') }}</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="!auth" to="/signup">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('signUp') }}</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="auth" @click="onLogout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('logout') }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LanguagePicker from './LanguagePicker.vue'

export default {
  data: () => ({
    drawer: false,
    icons: [
      'mdi-home',
      'mdi-home-search-outline',
      'mdi-palm-tree',
      'mdi-information-variant'
    ],
    routes: [
      '/',
      '/apartments',
      '/novalja',
      '/about'
    ]
  }),
  i18n: {
    messages: {
      hr: {
        items: [
          {
            title: 'Početna stranica'
          },
          {
            title: 'Apartmani'
          },
          {
            title: 'Novalja'
          },
          {
            title: 'Kako do nas?'
          }
        ],
        login: 'Prijavite se',
        signUp: 'Registrirajte se',
        logout: 'Odjavite se'
      },
      en: {
        items: [
          {
            title: 'Home'
          },
          {
            title: 'Apartments'
          },
          {
            title: 'Novalja'
          },
          {
            title: 'How to find us?'
          }
        ],
        login: 'Login',
        signUp: 'Sign up',
        logout: 'Sign out'
      },
      de: {
        items: [
          {
            title: 'Startseite'
          },
          {
            title: 'Wohnungen'
          },
          {
            title: 'Novalja'
          },
          {
            title: 'Wie erreichen Sie uns?'
          }
        ],
        login: 'Einloggen',
        signUp: 'Anmelden',
        logout: 'Ausloggen'
      },
      sl: {
        items: [
          {
            title: 'Domača stran'
          },
          {
            title: 'Apartmaji'
          },
          {
            title: 'Novalja'
          },
          {
            title: 'Kako do nas?'
          }
        ],
        login: 'Vpiši se',
        signUp: 'Registrirajte se',
        logout: 'Odjavite se'
      },
      cs: {
        items: [
          {
            title: 'Domovská stránka'
          },
          {
            title: 'Byty'
          },
          {
            title: 'Novalja'
          },
          {
            title: 'Jak se k nám dostanete?'
          }
        ],
        login: 'Přihlásit se',
        signUp: 'Zaregistrovat se',
        logout: 'Odhlásit se'
      },
      it: {
        items: [
          {
            title: 'Home'
          },
          {
            title: 'Appartamenti'
          },
          {
            title: 'Novalja'
          },
          {
            title: 'Come raggiungerci?'
          }
        ],
        login: 'Registrati',
        signUp: 'Iscriviti',
        logout: 'Disconnessione'
      }
    }
  },
  components: {
    LanguagePicker
  },
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
