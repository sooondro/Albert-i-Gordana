<template>
  <div>
    <b-sidebar
      type="is-dark"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      :open.sync="open"
    >
      <div class="p-1">
        <img
          src="../assets/pictures/logo/final1.1.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <b-menu>
          <b-menu-list :label="$t('navbar.apartments')">
            <b-menu-item :label="$t('apartments[0].title')"
            @click="component = 'albert-one'; open = false">
            </b-menu-item>
            <b-menu-item :label="$t('apartments[1].title')"
            @click="component = 'albert-two'; open = false">
            </b-menu-item>
            <b-menu-item :label="$t('apartments[2].title')"
            @click="component = 'albert-three'; open = false">
            </b-menu-item>
            <b-menu-item :label="$t('apartments[3].title')"
            @click="component = 'albert-four'; open = false">
            </b-menu-item>
            <b-menu-item :label="$t('apartments[4].title')"
            @click="component = 'gordana-one'; open = false">
            </b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
    <div class="mt-6 center">
      <b-button @click="open = true">{{ $t('navbar.apartments') }}</b-button>
    </div>
    <component :is="component"></component>
  </div>
</template>

<script>
import AlbertOne from '@/components/AlbertOne.vue';
import AlbertTwo from '@/components/AlbertTwo.vue';
import AlbertThree from '@/components/AlbertThree.vue';
import AlbertFour from '@/components/AlbertFour.vue';
import GordanaOne from '@/components/GordanaOne.vue';

export default {
  components: {
    'albert-one': AlbertOne,
    'albert-two': AlbertTwo,
    'albert-three': AlbertThree,
    'albert-four': AlbertFour,
    'gordana-one': GordanaOne,
  },
  data() {
    return {
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false,
      component: 'albert-one',
    };
  },

};
</script>

<style lang="scss">
.mt-6 {
  margin-top: 6rem;
}

.p-1 {
  padding: 1rem;
}

ul {
  list-style: none;
}

.menu-label, .menu-list a {
  color: white;
}

.menu-list a.is-active {
  background-color: #4a4a4a;
}

.center {
  text-align: center;
}
</style>
