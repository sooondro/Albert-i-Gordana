<template>
  <div>
    <div class="parallax">
      <div class="caption">
        <h3 class="title is-3">Novalja</h3>
      </div>
    </div>
    <div class="container mt-2">
      <div class="columns">
        <div class="column">
          <router-link :to="`/${$i18n.locale}/houses`">
            <h5 class="title is-5">Albert</h5>
            <figure class="image is-4by3">
              <img src="../assets/pictures/homepage/gordana.jpg" alt="House Gordana">
            </figure>
            <ul>
              <li v-for="(item, index) in $t('home.albertInfo')" :key="index">{{ item }}</li>
            </ul>
          </router-link>
        </div>
        <div class="column">
          <router-link :to="`/${$i18n.locale}/houses`">
            <h5 class="title is-5">Gordana</h5>
            <figure class="image is-4by3">
              <img src="../assets/pictures/homepage/gordana.jpg" alt="House Gordana">
            </figure>
            <ul>
              <li v-for="(item, index) in $t('home.gordanaInfo')" :key="index">{{ item }}</li>
            </ul>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};
</script>

<style lang="scss" scoped>
.column {
  border: 1px solid black;
}

.column:hover {
  border: 1px solid white;
}

.caption {
  position: relative;
  top: 90%;
  width: 100%;
  text-align: center;
}

li {
  margin-left: 1.5rem;
}

.parallax {
  background-image: url(../assets/pictures/homepage/novalja.jpg);
  height: 700px;
  background-attachment: fixed;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
