<template>
  <div class="margin-top">
    <div v-for="(item, index) in $t('apartments')" :key="index"
    class="columns mt-2 is-centered">
      <div class="column is-4">
        <figure class="image">
          <img :src="images[index]">
        </figure>
      </div>
      <div class="column is-6">
        <h4 class="title is-4">{{ item.title }}</h4>
        <div class="mt-2">
          <ul>
            <li v-for="(text, i) in item.description" :key="i">{{ text }}</li>
          </ul>
        </div>
        <div class="center mt-2">
          <b-button
          tag="router-link"
          :to="`/${$i18n.locale}/apartment`"
          type="is-link">
            {{ $t('apartment.moreInfo') }}
          </b-button>
        </div>
      </div>
    </div>
    <div class="columns mt-2 is-centered">
      <div class="column is-4">
        <figure class="image">
          <img src="../assets/pictures/logo/final1.1.png">
        </figure>
      </div>
      <div class="column is-6 center">
        <h4 class="title is-4">{{ $t('apartment.cheaper') }}</h4>
        <b-button @click="clickMe">{{ $t('apartment.moreInfo') }}</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require('../assets/pictures/albert/apartments/a-sa09.jpg'), // eslint-disable-line global-require
        require('../assets/pictures/albert/apartments/a-sb05.jpg'), // eslint-disable-line global-require
        require('../assets/pictures/albert/apartments/a-sc03.jpg'), // eslint-disable-line global-require
        require('../assets/pictures/albert/apartments/a-sd13.jpg'), // eslint-disable-line global-require
        require('../assets/pictures/gordana/g-ispred1.jpg'), // eslint-disable-line global-require
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .margin-top {
    margin-top: 6rem;
  }

  img {
    max-width: 300px;
    margin: auto;
  }

.column div{
  margin-left: auto;
  margin-right: auto;
}

ul li {
  margin-left: 3rem;
}

.columns {
  border-bottom: 1px solid white;
  padding-bottom: 2rem;
}

button, a.button {
  border: 1px solid white;
  color: white;
  background-color: black;
}

button:hover, a.button:hover {
  border: 1px solid white;
  color: gray;
  background-color: black;
}

.center {
  text-align: center;
}
</style>
