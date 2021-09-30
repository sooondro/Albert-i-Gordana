<template>
  <div class="home">
    <div class="parallax mb-10">
    </div>
    <homepage-tab></homepage-tab>
  </div>
</template>

<script>
import HomepageTab from '../components/HomepageTab.vue'

export default {
  name: 'Home',
  components: {
    HomepageTab
  }
}
</script>

<style>
.parallax {
  background-image: url(../assets/pictures/homepage/novalja.jpg);
  height: 600px;
  background-attachment: fixed;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
