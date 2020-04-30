<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="`/${$i18n.locale}`" class="navbar-item">
          <img class="logo" src="./assets/logo.png">
        </router-link>

        <a role="button" class="navbar-burger burger centered" aria-label="menu"
        aria-expanded="false" data-target="navbarBurgerDropdown">
          <span class="line" aria-hidden="true"></span>
          <span class="line" aria-hidden="true"></span>
          <span class="line" aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBurgerDropdown" class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="`/${$i18n.locale}/apartments`" class="navbar-item">
            {{ $t('navbar.apartments') }}
          </router-link>
          <router-link :to="`/${$i18n.locale}/novalja`" class="navbar-item">
            Novalja
          </router-link>
          <router-link :to="`/${$i18n.locale}/findUs`" class="navbar-item">
            {{ $t('navbar.findUs') }}
          </router-link>
          <div class="navbar-item">
            <b-dropdown aria-role="list">
              <button class="button" slot="trigger"
               style="background-color:black; color:white">
                <font-awesome-icon icon="language" size="lg"/>
                <span class="is-uppercase" style="margin-left:1rem">
                  {{$i18n.locale}}</span>
              </button>

              <b-dropdown-item aria-role="listitem" v-for="entry in languages" :key="entry.title"
              @click="changeLocale(entry.language)">
                <div class="columns is-mobile is-vcentered">
                  <div class="column is-4">
                    <country-flag :country="entry.flag"/>
                  </div>
                  <div class="column">
                    {{entry.title}}
                  </div>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <p class="control" v-if="!isLoggedIn">
              <a class="button is-danger" @click="loginWithGoogle()">
                Login with Google
              </a>
              <a class="button is-danger" @click="loginWithFacebook()">
                Login with Facebook
              </a>
            </p>
            <p class="control logged-in" v-if="isLoggedIn">
              <section class="avatar">
                <figcaption style="color:white">{{ user.name }}</figcaption>
                <figure class="image is-32x32">
                  <img class="is-rounded" :src="user.image">
                </figure>
              </section>
              <a class="button is-primary centered" @click="signOut()">
                <span>{{ $t('navbar.logOut') }}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer mt-2">
      <div class="columns is-vcentered ordered-mobile">
        <div class="column has-text-centered-mobile fl-2">
          <p><font-awesome-icon icon="home" />Albert & Gordana Semenčić</p>
          <p><font-awesome-icon icon="map-marker-alt" />Novalja, {{ $t('footer.island') }} Pag,
          {{ $t('footer.croatia') }}</p>
          <p><font-awesome-icon icon="phone-alt" />Tel: 00385 53 661 917</p>
          <p><font-awesome-icon icon="mobile-alt" />Mob: 00385 91 554 1149</p>
          <p><font-awesome-icon icon="at" />goran.semencic@gmail.com</p>
        </div>
        <div class="column fl-1">
          <div class="columns is-mobile has-text-centered is-variable is-8-mobile">
            <div class="column">
              <a href="">
                <font-awesome-icon :icon="['fab', 'facebook']"
                size="3x" style="color: white"/>
              </a>
            </div>
            <div class="column">
              <a href="">
                <font-awesome-icon :icon="['fab', 'facebook-messenger']"
                size="3x" style="color: white"/>
              </a>
            </div>
            <div class="column">
              <a href="">
                <font-awesome-icon :icon="['fab', 'instagram']"
                size="3x" style="color: white"/>
              </a>
            </div>
          </div>
        </div>
        <div class="column has-text-right has-text-centered-mobile fl-3">
          <p><font-awesome-icon icon="laptop-code" />
          {{ $t('footer.developed') }} Sandro Blavicki</p>
          <p><font-awesome-icon icon="edit" />{{ $t('footer.designed') }} Iva Didović</p>
          <p><font-awesome-icon icon="paint-brush" />{{ $t('footer.logo') }} Davor Suljić</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapActions, mapState } from 'vuex';
import i18n from '@/i18n';

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: {
    ...mapActions('auth', ['loginWithGoogle', 'loginWithFacebook', 'signOut']),
    changeLocale(locale) {
      i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
  },
  components: {
  },
  data() {
    return {
      languages: [
        {
          flag: 'us',
          language: 'en',
          title: 'English',
        },
        {
          flag: 'hr',
          language: 'hr',
          title: 'Hrvatski',
        },
      ],
    };
  },
};

$(document).ready(() => {
  $('.navbar-burger').click(() => {
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });
});
</script>

<style lang="scss">
.svg-inline--fa {
  margin-right: 5px;
}

.router-link-exact-active, .router-link-active {
  background-color:black;
  text-decoration: underline;
  text-decoration-color: white;
}

a.navbar-item:focus, a.navbar-item:focus-within {
  background-color: black;
  color: white;
}

.button:focus, .button.is-focused {
  border-color: #aaaaaa;
}

.dropdown-item {
  padding: 0rem;
}

html {
  background-color: black;
}

body {
  color: white;
}

.navbar {
  background-color: black;
  min-height: unset;
  height: 6rem;
}

.line {
  color: white;
}

.navbar-item .logo {
  max-height: 5rem;
  margin-left: 3rem;
}

.logged-in{
  display: flex;
  flex-direction: row;
}

.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
}

.centered {
  margin-top: auto;
  margin-bottom: auto;
}

.navbar-menu {
  background-color: black;
}

.navbar-item {
  color: white;
  font-size: 1.5rem;
}

a.navbar-item:hover {
  background-color: black;
  color: #aaaaaa;
  text-decoration-color: #aaaaaa;
}

.footer {
  background-color: black;
}

@media screen and (max-width: 769px) {
  .ordered-mobile {
    display: flex;
    flex-flow: column;
  }
  .ordered-mobile .fl-1 {
    order: 1;
  }
  .ordered-mobile .fl-2 {
    order: 2;
  }
  .ordered-mobile .fl-3 {
    order: 3;
  }
}
</style>
